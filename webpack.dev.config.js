const baseWebpackConfig = require('./webpack.config');
module.exports = Object.assign({}, baseWebpackConfig, {
  entry: './src/example/index.tsx',
  mode: 'development'
});