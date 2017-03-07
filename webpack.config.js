const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HappyPack = require('happypack');
const autoprefixer = require("autoprefixer");
module.exports = {
	entry: {
		"app": "./js/index.js",
		'antd': ['antd'],
		"common": ['react', 'react-dom'],
		"reactRouter": ['react-router']
	},
	output: {
		path: './dist',
		filename: "./js/[name]-[chunkhash].js"
		//	filename: "./js/[name]-[chunkhash].js"
	},
	module: {
		rules: [
			/*{	//js或者jsx文件引入的html文件，会被抽取为单独的html文件 与htmlWebpackPlugin冲突，可使用html-loader代替file-loader
				test: /\.html$/,
				exclude: /node_modules/,
				use: 'file-loader?name=[name].[ext]'
			},
			*/
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				}),
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
							loader: 'css-loader'
						},{
							loader: 'autoprefixer-loader'
						},{
							loader: 'sass-loader'
						}
					]
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.json$/,
				use: 'json'
			},
			{
				test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
				use: [
					// 小于10KB的图片会自动转成dataUrl
					'url?limit=10240&name=img/[hash:8].[name].[ext]',
					'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
				]
			},
			{
				test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
				use: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
			}
		],
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		port: 5006
	},
	plugins: [
		//new webpack.NoEmitOnErrorsPlugin(),
		new htmlWebpackPlugin({
			filename: 'index-[hash].html',
			template: 'index.html',
			title: '首页',
			inject: 'body'
		}),
		new HappyPack({
			id: 'js',
			threads: 6,
			loaders: ["babel-loader"]
		}),
		new ExtractTextPlugin({
			allChunks: true,
			filename: "[name]-[hash].css"
		}),
		new webpack.optimize.CommonsChunkPlugin({name: ['antd', 'reactRouter', 'common'],  minChunks:2}),
		//new webpack.optimize.UglifyJsPlugin(),
	]
};