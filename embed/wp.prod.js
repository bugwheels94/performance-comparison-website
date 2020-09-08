const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./wp.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
	devtool: 'source-map',
	mode: 'production',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new CompressionPlugin({
			test: /^((?!loader).)*$/
		}),
		new webpack.DefinePlugin({
			'URL': JSON.stringify('api.lvh.me')
		})
	],
	module: {
		rules: []
	}
});
