module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2)$/i,
        type: "asset/resource",
      },
    ],
  },
  entry: "./code/main.js",
};
