// You can install more packages below to config more as you like:
// eslint
// babel-eslint
// eslint-config-standard
// eslint-loader
// eslint-plugin-html
// eslint-plugin-promise
// eslint-plugin-standard
// postcss-cssnext

const path = require('path')
const webpack = require('webpack')

const bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n'
)
const HtmlWebpackPlugin = require('html-webpack-plugin')

function getBaseConfig() {
  return {
    entry: {
      app: path.resolve('./src/app.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      // // You can use ESLint now!
      // // Please:
      // // 1. npm install {
      // //   babel-eslint
      // //   eslint
      // //   eslint-config-standard
      // //   eslint-loader
      // //   eslint-plugin-html
      // //   eslint-plugin-promise
      // // } --save-dev
      // // 2. set .eslintrc
      // //   take { "extends": "standard" } for example
      // //   so you need: npm install eslint-plugin-standard --save-dev
      // // 3. set the config below
      rules: [
        {
          test: /\.vue$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue(\?[^?]+)?$/,
          use: []
        },
        {
          test: /\.gif$/,
          loader: 'file-loader',
          exclude: /node_modules/
        }
      ]
    },
    // vue: {
    // // You can use PostCSS now!
    // // Take cssnext for example:
    // // 1. npm install postcss-cssnext --save-dev
    // // 2. write `var cssnext = require('postcss-cssnext')` at the top
    // // 3. set the config below
    // postcss: [cssnext({
    //   features: {
    //     autoprefixer: false
    //   }
    // })]
    // },
    plugins: [bannerPlugin, new HtmlWebpackPlugin({
    })]
  }
}

const webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.rules[3].use.push('vue-loader')

// const weexConfig = getBaseConfig()
// weexConfig.output.filename = '[name].weex.js'
// weexConfig.module.rules[3].use.push('weex-loader')

const vuxLoader = require('vux-loader')

module.exports = [vuxLoader.merge(webConfig, {
  plugins: [{
    name: 'vux-ui'
  }]
})]
// module.exports = [webConfig]
