module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'nuxt demo',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        __dangerouslyDisableSanitizers: ['script']  // 不对<script>标签中内容做转义处理
	},
	/*
	** Customize the progress bar color
	*/
    loading: { color: '#3B8070' },
    plugins:[
        {
            src:'~/plugins/toast',
            ssr:false
        }
    ],
	/*
	** Build configuration
	*/
	build: {
	 /**
	  * Run ESLint on save
	  * 为客户端和服务端的构建配置进行手工的扩展处理。
	  * 该扩展方法会被调用两次，一次在服务端打包构建的时候，另外一次是在客户端打包构建的时候。该方法的参数如下：
	  * Webpack 配置对象
	  * 构建环境对象，包括这些属性（全部为布尔类型）： isDev， isClient， isServer
	  * @param {*} config 
	  * @param {*} param1 
	  */
	  extend (config, { isDev, isClient }) {
		if (isDev && isClient) {
			config.module.rules.push({
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /(node_modules)/
			})
		}
      },
      vendor: ['axios']
	  // babel: {  // 为 JS 和 Vue 文件设定自定义的 babel 配置
	  //   presets: ['es2015', 'stage-0']
	  // }
	},
	css:[
		'assets/main.css'
	]
  }
  
  