const path = require('path');
const baseConfig = require('./webpack.config.base');

module.exports = {
    ...baseConfig,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),  // 监听位置
        port: 9000,  // 设置服务器端口
        open: true,
        historyApiFallback: true // 将所有 404 都返回 index.html
    }
}