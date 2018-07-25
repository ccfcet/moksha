const withCSS = require('@zeit/next-css');

let nextCSS = withCSS();
nextCSS.useFileSystemPublicRoutes = false;

module.exports = nextCSS;
