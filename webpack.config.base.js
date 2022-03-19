const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/index.js',       // 默认打开的文件的入口
  output: {
    filename: '[name].[contenthash].js',    //控制转化之后生成的文件的文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'可以使用我的标题',      //如果模板中没有title标签就用这个title，如果想要手动设置使用这个title就要模板中的title的内容写为<title><%= htmlWebpackPlugin.options.title %></title>
      template:'src/index.html'         //生成的html文件里面的内容是以template指定的路径下的html文件为模板
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,     //将引入的图片文件转化为路径
        use: ["file-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]    //将stylus的文件内容加载
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]    //将less的文件内容加载
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")       //将sass的文件内容加载
            }
          }
        ]
      }
    ]
  }
};