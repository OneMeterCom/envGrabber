<h1 align="center"> envGrabber </h1>
<p align="center">
  <b >A simple script to pull environment variables from a GCP Storage bucket. Designed to work with Google App Engine out of the box</b>
</p>
<br>

## Usage :
```
yarn add --dev envgrabber
```

at your package.json
```
{
  "postinstall": "envgrabber -b my_bucket_name -f .env"
}
```