const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const WebpackDevServer = require('webpack-dev-server')

new WebpackDevServer(webpack(webpackConfig), {
  // for invalid host header
  disableHostCheck: true,
  stats: {
    colors: true
  }
}).listen(8080, '0.0.0.0', err => {
  if (err) {
    console.log(err)
  }
  console.log('Listening started ...')
})
