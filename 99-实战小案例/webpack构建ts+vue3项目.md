# webpack构建ts+vue3项目

## 构建项目目录

- src
- -- main.ts
- -- App.vue
- --shim.d.ts
- webpack.config.js
- index.html
- package.json
- tsconfig.json

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/19ed759cd824707fad51f120dc1950e5.png)

## 基础构建

```bash
npm install webpack -D
npm install webpack-dev-server -D
npm install webpack-cli -D
```



package .json 添加打包命令和 启动服务的命令

```json
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
  }
}
```



编写webpack.config.js 配置文件测试打包

```javascript
const { Configuration } = require('webpack')
const path  = require('path')
/**
 * @type {Configuration}
 */
const config = {
    mode:"development", //开发模式
    entry:'./src/main.ts', //入口
    output:{
        path: path.resolve(__dirname, 'dist'), //出口目录
        filename: 'main.js', //出口文件
    }
}
 
module.exports = config
```



tsconfig.json 增加配置项

```json
  "include": [
    "src/**/*"
  ]
```

运行npm run build 打包成功

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/d9826b9c17578e7aee7365f9acf58f73.png)



## 支持TypeScript 

增加依赖

```bash
npm install ts-loader -D
npm install typescript -D
```



```javascript
const { Configuration } = require('webpack')
const path = require('path')
/**
 * @type {Configuration}
 */
const config = {
    mode: "development",
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader' //支持解析ts文件
            }
        ]
    }
}
 
module.exports = config
```



## 支持vue

安装依赖

```bash
npm install vue-laoder -D
npm install html-webpack-plugin -D
```



main.ts 引入Vue

```typescript
import { createApp } from 'vue'
import App from './App.vue'
 
createApp(App).mount('#app')
```



让ts识别.vue后缀

```typescript
declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}
```



初始化index.html 模板

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

增加vue-loader 和 插件

```javascript
const { Configuration } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWepackPlugin = require('html-webpack-plugin')
const path = require('path')
/**
 * @type {Configuration}
 */
const config = {
    mode: "development",
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    stats: 'errors-only',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWepackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use:{
                    loader: 'ts-loader',
                    options:{
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
}
 
module.exports = config
```



## 支持css + less

```bash
npm install css-loader style-loader less less-loader -D
```

```javascript
const { Configuration } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWepackPlugin = require('html-webpack-plugin')
const path = require('path')
/**
 * @type {Configuration}
 */
const config = {
    mode: "development",
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    stats: 'errors-only',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWepackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use:{
                    loader: 'ts-loader',
                    options:{
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //从右向左解析
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
}
 
module.exports = config
```



## 代码分包

性能优化 默认把所有代码打包到一个js文件体积太大了我们可以进行代码分包减少体积

```javascript
const { Configuration } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWepackPlugin = require('html-webpack-plugin')
const path = require('path')
/**
 * @type {Configuration}
 */
const config = {
    mode: "development",
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[chunkhash].js',
        clean: true
    },
    stats: 'errors-only',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWepackPlugin({
            template: './index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                moment: {
                    name: "moment",
                    test: /[\\/]node_modules[\\/]moment[\\/]/,
                    chunks: "all"
                },
                common:{
                    name: "common",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //从右向左解析
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
}
 
module.exports = config
```



## 单独提取css

目前是通过js动态插入style 标签的方式进行的，但是我们希望通过link标签引入

```bash
npm install mini-css-extract-plugin -D
```

```javascript
const { Configuration } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWepackPlugin = require('html-webpack-plugin')
const MimiCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
/**
 * @type {Configuration}
 */
const config = {
    mode: "development",
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[chunkhash].js',
        clean: true
    },
    stats: 'errors-only',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWepackPlugin({
            template: './index.html'
        }),
        new MimiCssExtractPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                moment: {
                    name: "moment",
                    test: /[\\/]node_modules[\\/]moment[\\/]/,
                    chunks: "all"
                },
                common:{
                    name: "common",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [MimiCssExtractPlugin.loader, 'css-loader'] //从右向左解析
            },
            {
                test: /\.less$/,
                use: [MimiCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    }
}
 
module.exports = config
```

