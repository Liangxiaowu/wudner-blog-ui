let proxyObj = {};
// const CompressionPlugin = require("compression-webpack-plugin");
proxyObj['/api'] = {
    ws: false,
    target: 'http://192.168.1.103:8089',
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}

module.exports = {
    devServer: {
        host: 'localhost',
        port: 8090,
        proxy: proxyObj
    }
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
	// 		console.info(1111)
    //         return {
    //             plugins: [
    //                 new CompressionPlugin({
    //                     test: /\.js$|\.html$|\.css/,
    //                     threshold: 1024,
    //                     deleteOriginalAssets: false
    //                 })
    //             ]
    //         }
    //     }
    // }
}