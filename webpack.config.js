const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/main.ts",
    module: {
        rules: [
            {
                use: "ts-loader",
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                test: /\.tsx?$/
            },
            {
                use: [
                    "style-loader",
                    "css-loader"
                ],
                test: /\.css$/
            }
        ]
    },
    output: {
        library: "Circulider",
        libraryExport: "default",
        filename: "circulider.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: "inline-source-map"
};
