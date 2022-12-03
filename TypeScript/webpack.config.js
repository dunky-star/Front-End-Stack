module.exports = {
    entry: './app.ts',
    output: {
        filename: 'dist/bundle.js' 
    },
    resolve: {
        extensions: ['.ts']
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