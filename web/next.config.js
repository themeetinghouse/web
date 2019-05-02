

//module.exports = ()
global.fetch = require('node-fetch');


require('ignore-styles')
const withTypescript = require('@zeit/next-typescript')
const withOffline = require('next-offline')
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
  require.extensions[".css"] = (file) => {};
 }
 const withProgressBar = require('next-progressbar')

 module.exports = withProgressBar(
  withCSS(
 withPlugins([
  [withCSS, {
    cssModules: false, // setting to false to prevent any extra stuff added to the class name apart of localIdentName
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[name]__[local]___[hash:base64:5]", // this was taken from amplify ui webpack config
    }
  }],
  [withTypescript],
  [withOffline]
])));