<h1 align="center"> envGrabber </h1>
<p align="center">
  <b >A simple script to pull environment variables from a GCP Storage bucket a sets them in your app. Designed to work with Google App Engine out of the box</b>
</p>
<br>

## Usage :
```
yarn add envgrabber
```

at your package.json
```
{
  "prestart": "envgrabber -b my_bucket_name -f .env"
}
```

or use directly in your app
````javascript
const envGrabber = require('envgrabber');

(async () => {
  await envGrabber({
    bucketName: 'my_super_secret_bucket',
    fileName: '.env', // optional, '.env' is assumed.
  });
})()

````