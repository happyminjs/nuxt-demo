# z-index记录
1、header和footer是999；
2、toast是999；



# nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).




### 先来安装创建项目
官方提供了一个starter模板，方便我们使用，可以直接下载[模板压缩包](https://github.com/nuxt-community/starter-template/archive/master.zip)，也可以使用vue-cli安装，下面是vue-cli安装步骤：
```bash
    # 安装vue-cli
    npm install -g vue-cli 
    # 下载starter模板
    vue init nuxt-community/starter-template
    # 安装依赖
    npm install
    # 启动项目
    npm run dev
``` 
当然，你也可以自己从头开始创建一个全新的项目，这里就不多说，只是个人觉着starter模板用着真的很方便，目录结构特别清晰，也很符合我们平时的命名习惯和规则~~~
### 目录结构
![目录结构](/_doc_img/catalog.png)
### 配置
默认配置涵盖了大部分的场景，也可在nuxt.config.js中覆盖默认配置项
###### HTML头部标签
可以在nuxt.config.js配置统一的头部标签，常用的title、meta、script标签
```bash
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
    }
```
也可以在某页面的文件下配置，例如修改页面title
```bash
    head() {
        // 个性化设置head
        return {
            title: '页面标题'
        };
    }
```
###### 全局样式配置
```bash
    css:[
		'assets/main.css'
	]
```
###### 全局环境设置
###### build设置
常用配置：vendor、extend
常见将每个页面都用的插件，在此处配置，则就不需要每个页面引入的时候打包多次了。例如axios
```bash
    build: {
        vendor: ['axios']
    }
```
###### 插件设置plugins
这里一般是来配置开发的插件，可以设置ssr为false来只在浏览器运行。

#### 路由
这可是Nuxt.js的一个亮点。它可以根据pages目录结构，自动生成路由配置。
假设pages的结构是下边这样的：

![pages截图](/_doc_img/pages.png)

则会自动生成路由配置：
```bash
    router: {
        routes: [
            {
                name: 'index',
                path: '/',
                component: 'pages/index.vue'
            },
            {
                name: 'user',
                path: '/user',
                component: 'pages/user/index.vue'
            },
            {
                name: 'user-one',
                path: '/user/one',
                component: 'pages/user/one.vue'
            }
        ]
    }
```
#### 嵌套路由
创建与该文件同名的目录存放子视图的组件。

![嵌套pages](/_doc_img/pages_child.png)

自动生成的路由
```bash
    router: {
        routes: [
            {
                path: '/user',
                component: 'pages/user.vue',
                children: [
                    {
                        path: '',
                        component: 'pages/user/index.vue',
                        name: 'user'
                    },
                    {
                        path: ':child',
                        component: 'pages/users/child.vue',
                        name: 'user-child'
                    }
                ]
            }
        ]
    }
```
    不要忘记了要在父级的vue文件中增加<nuxt-child/>来显示子视图的内容。
#### 定制默认模板
只需要在根目录下创建app.html文件即可。
默认模板是：
```bash
    <!DOCTYPE html>
    <html {{ HTML_ATTRS }}>
    <head>
        {{ HEAD }}
    </head>
    <body {{ BODY_ATTRS }}>
        {{ APP }}
    </body>
    </html>
```
#### 默认布局
默认布局是layouts文件夹下的default.vue文件，默认的布局结构是：
```bash
    <template>
        <nuxt/>
    </template>
```
pages文件夹下的vue文件中的内容会插入在<nuxt/>中。
你也可以修改此文件来扩展应用的默认布局。
```bash
    <template>
        <div>
            <head-dom/>
            <nuxt/>
            <foot-dom/>
        </div>
    </template>
    <script>
        import HeadDom from "~/layouts/head.vue";
        import FootDom from "./foot.vue";
        export default {
            components: {
                HeadDom,FootDom
            }
        };
    </script>
```
生成页面的结构如下图：

![布局](/_doc_img/layout.png)

从外到内依次是layouts布局、pages页面、components组件
#### 自定义布局
如果想要某一个页面不走默认布局，可以在layouts文件夹下新建布局模板，然后该页面的vue文件中配置layouts，引入此布局模板。
```bash
    # layouts文件夹下的布局模板layout_one.vue
    <template>
        <div class="layout_one">
            <nuxt/>
        </div>
    </template>
    # pages文件夹下需要自定义布局的vue文件，配置layout参数即可
    export default {
        layout: "layout_one"
    }
```
#### 错误页面
可以通过编辑layouts/error.vue文件定制错误页面的样式。一般可以在404,500等错误页面的时候展示。
#### 异步数据
nuxt.js增加了asyncData的方法，这个方法是在组件加载之前调用，可以在服务端或者路由更新之前调用。使得我们可以在设置组件的数据之前异步获取或处理数据。
所以我们也就不可以通过this来引用组件的实例对象了，可以使用上下文对象来实现我们需要的一些功能。

### 资源文件
### 插件



---------------------------------------



