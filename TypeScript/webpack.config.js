module.exports = {
    entry: './app.ts',
    output: {
        filename: 'dist/bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}