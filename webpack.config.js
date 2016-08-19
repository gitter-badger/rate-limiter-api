var path = require('path')
var appRoot = require('app-root-path')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
var webpack = require('webpack')

module.exports = {
	entry:  path.join(String(appRoot), 'src/index.js'),
	output: {
		path: path.join(String(appRoot), 'dist'),
		filename: 'rate-limiter-api.js',
		library: 'RateLimiterApi',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		loaders: [{
			loader: 'babel',
			test: /\.js$/,
			exclude: /node_modules/,
		}],
	},
	plugins: [
		new LodashModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		// new webpack.optimize.UglifyJsPlugin(),
	],
}
