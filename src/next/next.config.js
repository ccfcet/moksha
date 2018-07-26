const withCSS = require('@zeit/next-css');

const nextCSS = withCSS();
nextCSS.useFileSystemPublicRoutes = false;

module.exports = nextCSS;
