const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    //path: path.resolve(__dirname + '/../server', 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/js/components'),
      '@utils': path.resolve(__dirname, './src/js/utils'),
      '@scss': path.resolve(__dirname, './src/scss'),
    },
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  devtool: 'cheap-eval-source-map',
};