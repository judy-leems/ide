const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 모든 js를 선택 
        use: [
          path.resolve("./my-webpack-loader.js")
        ]
      }
    ]
  }
}