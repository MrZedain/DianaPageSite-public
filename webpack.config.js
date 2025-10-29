const path = require('path');

module.exports = {
  entry: './src/index.js', // entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: 'bundle.js' // output bundle file name
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser")
    }
  },
  
};