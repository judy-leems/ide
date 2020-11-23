const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 모든 css를 선택 
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/, 
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: './dist',
          limit: 20000, // 2kb 이상은 file-loader로 파일을 불러오게됨 . 
        },
      }
    ]
  }
}
