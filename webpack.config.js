const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const plugins = [
  new CleanWebpackPlugin(),
  new CopyPlugin({
    patterns: [
      { from: './README.md' },
      { from: './package.json' },
    ],
  }),
];

module.exports = {
  devtool: 'hidden-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    libraryTarget: 'var',
    library: 'mychatbot',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },
  resolve: {
    extensions: ['.js', '.json', ".jsx"],
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              {
                'plugins': ['@babel/plugin-proposal-class-properties']
              }
            ],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
};