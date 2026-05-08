
# 案例使用说明！

## 案例背景

    这是一个用TS的类封装的仿Vue的虚拟dom渲染小例子

## 如何调试案例？
```js
//两种方式任选其一
//方式一、使用tsc编译为js文件（注意：当前目录或上级目录到根目录里有tsconfig.json文件，TypeScript 说：配置文件 和 手动指定文件 不能一起用，如果要指定文件需要加上参数--ignoreConfig
tsc index.ts --ignoreConfig

//方式二、使用tsc --init 新建tsconfig.json文件并添加如下json文件的配置，直接使用下面命令编译为js,这个命令直接读取配置文件
tsc
```


tsconfig.json文件

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "CommonJS",
    "lib": ["ES2016", "DOM"],
    //不指定输出目录，就会在当前目录下生成编译后的 js 文件
    // "outDir": "./dist",
    "strict": true
}
​```
```

## 如何使用？

1、新建index.html文件
2、在html文件里引入编译好的index.js文件
3、使用live server运行index.html文件，直接看到效果