#!/usr/bin/env node

'use strict';
if (process.env.NODE_ENV === 'development') require('dotenv').config();

const gcs = require('@google-cloud/storage')();
const argv = require('yargs');

const { b: bucketName, f: fileName } = argv
  .usage('Usage: $0 [options]')
  .alias('b', 'bucket')
  .alias('f', 'file')
  .default('f', '.env')
  .example('$0 -b my_bucket -f .env')
  .describe('b', 'Google Storage bucket name')
  .describe('f', 'the name of the env file')
  .demandOption(['b']).argv;

(async () => {
  try {
    await gcs
      .bucket(bucketName)
      .file(fileName)
      .download({ destination: fileName });
    console.log('Environment variables file successfully downloaded');
  } catch (error) {
    console.log(error.message);
    process.exitCode = 1;
  }
})();
