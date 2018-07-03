#!/usr/bin/env node
'use strict';
const argv = require('yargs');
const envGrabber = require('./index');

const { b: bucketName, f: fileName = '.env', c: withCmd } = argv
  .usage('Usage: $0 [options]')
  .alias('b', 'bucket')
  .alias('f', 'file')
  .boolean('c')
  .default('f', '.env')
  .example('$0 -b my_bucket -f .env')
  .describe('b', 'Google Storage bucket name')
  .describe('f', 'the name of the env file')
  .describe('c', 'if true, will set the variables with cmd')
  .demandOption(['b']).argv;

(async () => {
  try {
    await envGrabber({ bucketName, fileName, withCmd });
    console.log(process.env);
  } catch (error) {
    console.log(error.message);
    process.exitCode = 1;
  }
})();
