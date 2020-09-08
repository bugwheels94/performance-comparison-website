const merge = require('webpack-merge');
const common = require('./wp.common.js');
const webpack = require('webpack')
module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
	output: {
		filename: 'js/[name].js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'URL': JSON.stringify('lvh.me')
		})
	]
});
