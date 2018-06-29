'use strict';
const gcs = require('@google-cloud/storage')();

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
  return gcs
    .bucket(bucketName)
    .file(fileName)
    .download({ destination: fileName });
}

module.exports = envGrabber;
