const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      overlay: false,
    },
    watchFiles: ["src/**/*"],
  },
  output: {
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        characters: "characters@http://localhost:3001/remoteEntry.js",
        detail: "detail@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": { singleton: true },
        "@tanstack/react-query": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
