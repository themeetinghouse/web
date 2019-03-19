

//module.exports = withCSS()
global.fetch = require('node-fetch');


const withCSS = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
  require.extensions[".css"] = file => {};
}
module.exports = withCSS()