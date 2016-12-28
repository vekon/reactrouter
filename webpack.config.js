var config = {
	entry: './main.js',
  output: {
    path: '/',
    filename: 'index.js'
  },
  devserver: {
    inline: true,
    port:7000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
}
module.exports = config;