
var {version} = require('./package.json')

module.exports = {

	productionSourceMap: false,

	runtimeCompiler: true,

	filenameHashing: false,

	chainWebpack: config => {
		config.plugins.delete('preload')
    	config.plugins.delete('prefetch')

    	config
		.output
		.filename('js/[name].bundle.js')


		// config.module
		// 	.rule('vue')
		// 	.test(/\.vue$/)
		// 	.use('vue-loader')
		// 	.loader('vue-loader')
		// 	.end()

		// config.module
		// 	.rule('vue')
		// 	.test(/\.vue$/)
		// 	.use('iview-loader')
		// 	.loader('iview-loader')
		// 		.options({
		// 			prefix: false
		// 		})
		// 	.end()
	}
}