const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const plugins = () => {
  return [
    new HtmlWebpackPlugin({ 
      title: 'netflixroulette',
      template: './index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
    new CleanWebpackPlugin()
  ]
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['./index.js'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, './'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 5000,
    hot: true,
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: ['cache-loader', 'babel-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        type: 'asset/resource',
        include: [/fonts/],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader', 
          'cache-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'cache-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
