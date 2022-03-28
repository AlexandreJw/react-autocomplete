const baseWebpackConfig = require('./webpack.config');
module.exports = Object.assign({}, baseWebpackConfig, {
  entry: './src/example.tsx',
  mode: 'development'
});