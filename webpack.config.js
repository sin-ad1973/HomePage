module.exports = {
    mode: 'production',
    entry: './entry.js',

    output: {
        filename: 'output.js'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                options: {
                    presets: ['react']
                }
            }

        ]
    }
};