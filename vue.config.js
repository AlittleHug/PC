module.exports = {
    publicPath: './',
    productionSourceMap: false,
    //处理跨域问题。
    devServer: {
        proxy: {
            '/api':{
                target:'http://localhost:8762',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}