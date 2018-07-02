#!/usr/bin/env node
'use strict';
const argv = require('yargs');
const envGrabber = require('./index');

const { b: bucketName, f: fileName = '.env' } = argv
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
    await envGrabber({ bucketName, fileName });
    console.log(process.env.BUNDLE === 'production');
  } catch (error) {
    console.log(error.message);
    process.exitCode = 1;
  }
})();
