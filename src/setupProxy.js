const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use('/hd',
    createProxyMiddleware({
        target:'http://jx.xuzhixiang.top/ap/api',
        changeOrigin:true,
        pathRewrite:{
            "^/hd":""
        }
      }
    ))
}