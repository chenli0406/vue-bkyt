const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "";
      return args;
    });
    config.plugins.delete("prefetch");
  },
  devServer: {
    compress: true,
    disableHostCheck: true
  }
};
