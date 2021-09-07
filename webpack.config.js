var HtmlWebpackPlugin = require('html-webpack-plugin');

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-env'
      ],
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
};

// CONFIGURACION DE WEBPACK COMO OBJETO
// module.exports = {
//   output: {
//     filename: 'app.[hash].js'
//   },
//   module: {
//     rules: [javascriptRules]
//   },
//   devServer: {
//     port: 9000
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'src/index.html',
//     })
//   ]
// };

// CONFIGURACION DE WEBPACK COMO FUNCION
module.exports = (env, {mode}) => ({
  output: {
    filename: mode === 'production' ? 'app.[chunkhash].js' : 'app.[hash].js'
  },
  module: {
    rules: [javascriptRules]
  },
  devServer: {
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
});
