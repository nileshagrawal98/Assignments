module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}