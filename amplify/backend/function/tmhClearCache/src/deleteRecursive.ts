import {
  S3Client,
  ListObjectsV2Command,
  DeleteObjectsCommand,
} from '@aws-sdk/client-s3';

const s3Client = new S3Client({});

export async function deleteRecursive(
  bucket: string,
  dir: string
): Promise<number> {
  let count: number = 0;

  while (true) {
    const listObjectsCommand = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: dir,
    });
    const listedObjects = await s3Client.send(listObjectsCommand);

    if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
      break;
    }

    const deleteObjectsCommand = new DeleteObjectsCommand({
      Bucket: bucket,
      Delete: {
        Objects: listedObjects.Contents.map((obj) => ({ Key: obj.Key! })),
      },
    });

    const deleteOutput = await s3Client.send(deleteObjectsCommand);
    count += deleteOutput.Deleted?.length || 0;

    if (!listedObjects.IsTruncated) {
      break;
    }
  }

  return count;
}

export async function deleteRecursiveVerbose(
  bucket: string,
  dir: string
): Promise<string[]> {
  const list: string[] = [];

  while (true) {
    const listObjectsCommand = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: dir,
    });
    const listedObjects = await s3Client.send(listObjectsCommand);

    if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
      break;
    }

    const deleteObjectsCommand = new DeleteObjectsCommand({
      Bucket: bucket,
      Delete: {
        Objects: listedObjects.Contents.map((obj) => ({ Key: obj.Key! })),
      },
    });

    const deleteOutput = await s3Client.send(deleteObjectsCommand);
    list.push(...(deleteOutput.Deleted?.map((o) => o.Key!) || []));

    if (!listedObjects.IsTruncated) {
      break;
    }
  }

  return list;
}
