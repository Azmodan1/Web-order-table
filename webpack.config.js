const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssOptimizePlugin = require('optimize-css-assets-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')

const DevMode = process.env.NODE_ENV === 'development'

const ProdMode = !DevMode

const optimization = () => {
  config = {
    splitChunks: {
      chunks: 'all',
    },
  }
  if (ProdMode) {
    config.minimizer = [new CssOptimizePlugin(), new TerserPlugin()]
  }
  return config
}

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, './src/index.jsx')],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.css', '.jsx', '.png'],
  },
  devServer: {
    // hotOnly: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/public/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: ProdMode,
      },
    }),
    new CleanWebpackPlugin(),
    DevMode && new ESLintPlugin({ extensions: ['js', 'jsx'] }),
    DevMode && new webpack.HotModuleReplacementPlugin(),
    DevMode && new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: ProdMode ? 'styles-[contenthash].css' : 'index.css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      { test: /\.xml$/, use: ['xml-loader'] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
              webp: {
                enabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]', outputPath: './src/ui/assets/fonts/' },
      },
    ],
  },

  optimization: optimization(),
}
