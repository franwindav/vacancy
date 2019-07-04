const withLess = require('@zeit/next-less');
module.exports = withLess({
   cssModules: true,
   cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
   },
   config: {
      ctx: {
         theme: JSON.stringify(process.env.REACT_APP_THEME),
      },
   },
});
