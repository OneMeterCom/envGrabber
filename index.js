'use strict';
const gcs = require('@google-cloud/storage')();
const byline = require('byline');

/**
 * Grab the env file from a Google Storage bucket and set the environment variables.
 *
 * @async
 * @function
 * @param {Object} options
 * @param {string} [options.bucketName] - The name of the Google Storage bucket.
 * @param {string} [options.fileName=.env] - The name of the env file.
 * @returns {Promise<void>}
 */
function envGrabber({ bucketName, fileName = '.env' }) {
  return new Promise(async resolve => {
    const result = [];
    const file = await gcs
      .bucket(bucketName)
      .file(fileName)
      .createReadStream();

    const lineStream = byline.createStream(file);
    lineStream.on('data', line => {
      const [key, value] = line
        .toString()
        .replace(/['"]+/g, '')
        .replace(/\=/, '¬')
        .split('¬');
      result.push(key);
      process.env[key] = value;
    });
    lineStream.on('end', () => {
      console.log(
        `The following environment variables were set: ${result.join(', ')}`,
      );
      resolve();
    });
    lineStream.on('error', error => {
      throw new Error(error);
    });
  });
}

module.exports = envGrabber;
