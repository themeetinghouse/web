# The Meeting House Website

## Local Development

Ensure you have the LTS version of Node.js on your system: https://nodejs.org

```
$ git clone https://github.com/themeetinghouse/web.git
$ cd web
$ npm install
$ npm start
```

Open https://localhost:3006 in your browser.

## Sync Prod via GitHub Actions

Assets such as images and JSON files containing content and data are found in the `public/static` directory. When changes are pushed to this path on the `master` branch, the files should automatically synchronize with the production S3 hosting bucket and create a CloudFront invalidation via GitHub Actions (see [`.github/workflows/sync-prod.yml`](https://github.com/themeetinghouse/web/blob/master/.github/workflows/sync-prod.yml)).

### Ensuring Sync Prod was successful

A green checkmark beside your commit means that the workflow ran successfully:

<img src=https://user-images.githubusercontent.com/48423418/112054190-a7342880-8b2b-11eb-99eb-b89c10903197.png width=1000>

A red X means that something went wrong:

<img src=https://user-images.githubusercontent.com/48423418/112054189-a7342880-8b2b-11eb-9571-2fae32e8220a.png width=1000>

### Running Sync Prod manually

If you don't see a green checkmark or a red X, the workflow did not run:

<img src=https://user-images.githubusercontent.com/48423418/112054187-a7342880-8b2b-11eb-81e2-c016fd097072.png width=1000>

If this happens, you can go to https://github.com/themeetinghouse/web/actions/workflows/sync-prod.yml and trigger the workflow manually. 

Open the dropdown, then click the green button that says "Run workflow":

<img src=https://user-images.githubusercontent.com/48423418/112054350-d6e33080-8b2b-11eb-9902-0b64c346a2a3.png width=750>

Note: only authorized users can manually trigger the workflow in this repository.
