require("babel-polyfill")

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.exjs'],
    modulesDirectories: [
      "node_modules"
    ],
  },
  module: {
    loaders: [
      { test: /\.exjs$/, loader: "babel?presets[]=es2015!elixirscript" },
      { test: /\.js$/ /* , exclude: /(noode_modules|bower_components)/ */, loader: "babel?presets[]=es2015" }
    ]
  }
};
