const baseWebpackConfig = require('./webpack.config');
module.exports = Object.assign({}, baseWebpackConfig, {
  mode: 'production',
  externals: {
    'react': 'react', // Case matters here
    'react-dom': 'reactDOM' // Case matters here
  }
});