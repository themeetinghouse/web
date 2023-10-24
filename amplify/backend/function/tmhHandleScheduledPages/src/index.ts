/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_TMHUSERCONTENT_BUCKETNAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import {
  S3Client,
  ListObjectsCommand,
  ListObjectsCommandOutput,
  GetObjectCommand,
  GetObjectCommandOutput,
  CopyObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'; // Ensure you import required types and commands

const region = process.env.REGION;
if (!region) throw new Error('REGION is not defined');
const bucketName = process.env.STORAGE_TMHUSERCONTENT_BUCKETNAME;
if (!bucketName)
  throw new Error('STORAGE_TMHUSERCONTENT_BUCKETNAME is not defined');

const s3Client = new S3Client({ region });

const path = 'public/scheduled';

export const handler = async (
  event
): Promise<{ statusCode: number; body: string }> => {
  try {
    const listObjects: ListObjectsCommandOutput = await s3Client.send(
      new ListObjectsCommand({ Bucket: bucketName, Prefix: path })
    );

    if (!listObjects.Contents) {
      throw new Error('Failed to retrieve list objects from S3.');
    }

    const objectKeys = listObjects.Contents.map(
      (object: { Key?: string }) => object.Key
    ).filter((key?: string) => key?.endsWith('.json')) as string[]; // Filter ensures non-undefined

    const currentUnixTimeStamp = Math.floor(Date.now() / 1000);
    const publishedPages: string[] = [];

    for await (const key of objectKeys) {
      const result: GetObjectCommandOutput = await s3Client.send(
        new GetObjectCommand({ Bucket: bucketName, Key: key })
      );

      if (!result.Metadata) {
        continue; // Skip to the next iteration if no Metadata
      }

      const timeStampToBePublished = parseInt(
        result.Metadata['publish-time'] ?? '0'
      );

      if (currentUnixTimeStamp >= timeStampToBePublished) {
        const copyParams = {
          Bucket: bucketName,
          CopySource: `${bucketName}/${key}`,
          Key: 'public/savedContent/' + key.split('/').pop(),
        };

        await s3Client.send(new CopyObjectCommand(copyParams));

        if (key.includes('scheduled')) {
          const deleteParams = {
            Bucket: bucketName,
            Key: key,
          };
          await s3Client.send(new DeleteObjectCommand(deleteParams));
        }
        publishedPages.push(key);
      } else {
        console.log(
          `${key}. Seconds until publish:, ${
            timeStampToBePublished - currentUnixTimeStamp
          }`
        );
      }
    }
    console.log({ pagesScheduled: objectKeys.length });
    console.log({ publishedPages });
    return {
      statusCode: 200,
      body: JSON.stringify(publishedPages),
    };
  } catch (err) {
    console.error({ err });
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
