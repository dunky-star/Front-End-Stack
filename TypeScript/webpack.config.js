module.exports = {
    entry: './app.ts',
    mode: 'development',
    output: {
        filename: 'dist/bundle.js' 
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            }
        ]
    }
}