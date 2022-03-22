const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {

plugins: [
    new HtmlWebpackPlugin({
     template: path.resolve(__dirname, "src", "index.html")
    }),
  ],
};