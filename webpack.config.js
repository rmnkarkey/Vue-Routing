const path=require("path")
const config={
	entry:"../../index.js",
	output:{
		filename:"bundle.js",
		path:path.resolve(__dirname,"dist")
	},
	module:{
		rules:[
			{
				test:/.js$/,
				loader:"babel-loader",
				exclude:/node_modules/
			},

			{
				test:/.vue$/,
				loader:"vue-loader"
			}
		]
	},

	resolve:{
		alias:{
			'vue$':'vue/dist/vue.esm.js'
		}
	}

}

module.exports = config