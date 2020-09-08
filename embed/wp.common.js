var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: {
		loaders: './embed/src/loader',
		recordings: './embed/src/recordings',
		funnels: './embed/src/funnels',
	},
	output: {
		filename: 'js/[name].[chunkhash].js',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/public/',
		hashDigestLength: 6
	},
	module: {
		rules: [
			{
				test: /^.*js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						compact: false,
						plugins: ["@babel/plugin-proposal-object-rest-spread"]
					}
				}
			}
		]
	}
};
