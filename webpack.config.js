module.exports = {
  mode: 'development',
  entry: './src/index.js',       // 默认打开的文件的入口
  output: {
    filename: '[name].[contenthash].js',    //控制转化之后生成的文件的文件名
  },
};