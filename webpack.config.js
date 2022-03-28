const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mock = require('./mock/mock')
module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    // 要加这个, 否则别人不能正常使用你的包
    libraryTarget: 'umd' // 这个选项会尝试把库暴露给前使用的模块定义系统，这使其和CommonJS、AMD兼容或者暴露为全局变量
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open : true,
    before: mock.setUp
  },
  plugins: [new HtmlWebpackPlugin({  // Also generate a test.html
    filename: 'index.html',
    template: './src/example/index.html'
  })]
};