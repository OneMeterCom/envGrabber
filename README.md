<h1 align="center"> envGrabber </h1>
<p align="center">
  <b >A simple script to pull environment variables from a GCP Storage bucket a sets them in your app. Designed to work with Google App Engine Standard Node.js environment out of the box</b>
</p>
<br>

## Usage :
```
yarn add envgrabber
```
in your app
````javascript
const envGrabber = require('envgrabber');

(async () => {
  await envGrabber({
    bucketName: 'my_super_secret_bucket',
    fileName: '.env', // optional, '.env' is assumed.
  });
  console.log(process.env.MY_ENV_VAR);
})()

````

## Authentication :

If the Storage bucket and your app are in the same project you won't need to do any authentications.
If you'd like to use the module outside GAE, you'll have to make sure you've authenticated your local machine or started your app with the proper authentication environment variables.
