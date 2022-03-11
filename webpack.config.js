const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',      //生成的js文件的内容格式，development 是生成带有注释的，代码按照格式书写的；production 不带注释，代码写到一行上，尽量的减小大小。
  devtool:'inline-source-map',
  devServer:{
      contentBase:'./dist'
  },
  entry: './src/index.js',       // 默认打开的文件的入口
  output: {
    filename: '[name].[contenthash].js',    //控制转化之后生成的文件的文件名
  },
  plugins: [new HtmlWebpackPlugin({
      title:'可以使用我的标题',      //如果模板中没有title标签就用这个title，如果想要手动设置使用这个title就要模板中的title的内容写为<title><%= htmlWebpackPlugin.options.title %></title>
      template:'src/index.html'         //生成的html文件里面的内容是以template指定的路径下的html文件为模板
    }
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};