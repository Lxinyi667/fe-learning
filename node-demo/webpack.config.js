const path = require('path');

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'my-first-webpack.bundle.js',
    },
    devServer:{
        static:{
            directory:"./",
        },
        port:8090,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"],
            },
        ],
    },
};