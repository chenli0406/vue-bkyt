const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave:false,
  runtimeCompiler: false,
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
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
    // config.plugin('compressionPlugin').use(new CompressionPlugin({
    //   test: /\.(js|css|less)$/, // 匹配文件名
    //   threshold: 10240, // 对超过10k的数据压缩
    //   minRatio: 0.8,
    //   deleteOriginalAssets: true // 删除源文件
    // }));
    config.plugins.delete("prefetch");
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  },
  devServer:{
    host: '0.0.0.0',
    port:"8080", // 设置端口 默认8080
    open:true, // 项目运行自动打开浏览器
    // 在与port open 设置服务代理
    proxy:{
        // /api 自定义服务代理名字
        "/api":{
            target:"http://wash.sanguoxiche.com/api/v1", //代理帮助你请求的具体服务
            changeOrign:true, // 开启代理
            pathRewrite:{  // 格式化path 
                "^/api":""
            }
        }
    }
}
};