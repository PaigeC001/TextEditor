const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    // Set the mode to 'production' for optimized builds
    mode: 'production',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'), // Output to client/dist
    },
    plugins: [
      // Generates an HTML file based on a template
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'J.A.T.E',
      }),
      // Injects a custom service worker from src-sw.js
      new InjectManifest({
        swSrc: './src-sw.js', // Path to custom service worker
        swDest: 'service-worker.js', // Output name for the generated service worker
      }),
      // Generates a manifest.json file for PWA
      new WebpackPwaManifest({
        name: 'J.A.T.E',
        short_name: 'JATE',
        description: 'Just Another Text Editor PWA!',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        start_url: '/',
        publicPath: '/',
        fingerprints: false, // Disable fingerprinting for predictable file names
        inject: true, // Automatically inject the manifest
        icons: [
          {
            src: path.resolve('src/images/logo.png'), // Path to your app icon
            sizes: [96, 128, 192, 256, 384, 512], // Various icon sizes
            destination: path.join('assets', 'icons'), // Output directory within dist
          },
        ],
      }),
    ],
    module: {
      rules: [
        // CSS loader to handle CSS imports
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // Babel loader for JavaScript transpiling
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
