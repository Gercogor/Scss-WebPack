const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        /** Будет запускать сервер на localhost:8080 в этой папке*/
        contentBase: './dist',
    },
    watch: true,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            /** SCSS/SAAS */
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
                // npm i style-loader css-loader sass sass-loader -D
            },

        ],
    },
};