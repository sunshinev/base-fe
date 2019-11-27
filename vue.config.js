
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
	}
}