const WebpackLighthousePlugin = require("webpack-lighthouse-plugin");
module.exports = {
  configureWebpack: {
    plugins: [
      new WebpackLighthousePlugin({
        url: "http://localhost:8080"
      })
    ]
  }
};
