module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.exjs'],
    modulesDirectories: [
      "./",
      "node_modules"
    ],
  },
  module: {
    loaders: [
      { test: /\.exjs$/, exclude: /(noode_modules|bower_components)/, loader: "babel?presets[]=es2015!elixirscript" },
      { test: /\.js$/,   exclude: /(noode_modules|bower_components)/, loader: "babel?presets[]=es2015" }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: false,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only'
  },
};
