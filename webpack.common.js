const path = require("path");

module.exports = {
  entry: {
    background: path.join(__dirname, "src/background.ts"),
    contentScriptEow: path.join(__dirname, "src/contentScriptEow.ts"),
    contentScriptEowf: path.join(__dirname, "src/contentScriptEowf.ts"),
    options: path.join(__dirname, "src/options.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // Creates style nodes from JS strings
          },
          {
            loader: "css-loader" // Translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // Compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
