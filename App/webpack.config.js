//1:html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin');
//2:entry
//3:output
//4:module -->loader
//5:使用第一步的plugins

module.exports = {
	entry: {
		'main': './main.js'
	},
	output: {
		path: __dirname + '/dist/',
		filename: 'build.js',
	},
	module: {
		loaders: [
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
			}, {
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader?limit=8192&name=static/images/[hash:8].[name].[ext]'
			},
			{
				test: /\.(ttf|woff|eot|woff2)$/,
				loader: 'url-loader?limit=4000&name=static/font/[hash:8].[name].[ext]'
			},
			/*{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=5&name=[path][name].[ext]'
			},*/
			/*{
				test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
				loader: "file?name=images/[name].[ext]"
			},*/
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['es2015'],
					plugins: ['transform-runtime']
				}
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			}, {
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /vue-preview.src.*?js$/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015'],
					plugins: ['transform-runtime']
				}
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './index.html'
		})
	]

}
