const path = require('path');
const webpack = require('webpack');
// console.log(__dirname, path.join(__dirname, 'public'));
// console.log('process', process.env);
new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: '"production"'
    }
})
console.log('process', process.env.NODE_ENV);