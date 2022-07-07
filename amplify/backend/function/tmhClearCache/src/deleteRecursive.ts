import AWS from 'aws-sdk';

// From Emi's answer in this post
// https://stackoverflow.com/questions/20207063/how-can-i-delete-folder-on-s3-with-node-js

/**
 * Recursively remove objects in bucket under dir, returns a Promise that resolves to the count of deleted keys
 * @param s3
 * @param bucket
 * @param dir
 */
export async function deleteRecursive(
  s3: AWS.S3,
  bucket: string,
  dir: string
): Promise<number> {
  let count: number = 0;
  while (true) {
    // list objects
    const listedObjects = await s3
      .listObjectsV2({
        Bucket: bucket,
        Prefix: dir,
      })
      .promise();
    if (listedObjects.Contents === undefined) {
      throw new Error('Listing S3 returns no contents');
    }
    if (listedObjects.Contents.length !== 0) {
      // prepare delete request
      const deleteParams = {
        Bucket: bucket,
        Delete: {
          Objects: listedObjects.Contents.map((obj) => ({
            Key: obj.Key as string,
          })),
        },
      };
      // listedObjects.Contents.forEach(({ Key }) => {
      //     deleteParams.Delete.Objects.push({ Key as string });
      // });
      const deleteOutput = await s3.deleteObjects(deleteParams).promise();
      // count or list
      count += (deleteOutput.Deleted as AWS.S3.DeletedObjects).length;
    }
    if (!listedObjects.IsTruncated) {
      return count;
    }
  }
}

/**
 * Recursively remove objects in bucket under dir, return a Promise that resolves to an array of deleted keys
 * @param s3
 * @param bucket
 * @param dir
 */
export async function deleteRecursiveVerbose(
  s3: AWS.S3,
  bucket: string,
  dir: string
): Promise<string[]> {
  const list: string[] = [];
  while (true) {
    // list objects
    const listedObjects = await s3
      .listObjectsV2({
        Bucket: bucket,
        Prefix: dir,
      })
      .promise();
    if (listedObjects.Contents === undefined) {
      throw new Error('Listing S3 returns no contents');
    }
    if (listedObjects.Contents.length !== 0) {
      // prepare delete request
      const deleteParams = {
        Bucket: bucket,
        Delete: {
          Objects: listedObjects.Contents.map((obj) => ({
            Key: obj.Key as string,
          })),
        },
      };
      // listedObjects.Contents.forEach(({ Key }) => {
      //     deleteParams.Delete.Objects.push({ Key as string });
      // });
      const deleteOutput = await s3.deleteObjects(deleteParams).promise();
      // count or list
      (deleteOutput.Deleted as AWS.S3.DeletedObjects).forEach((o) => {
        list.push(o.Key as string);
      });
    }
    if (!listedObjects.IsTruncated) {
      return list;
    }
  }
}
