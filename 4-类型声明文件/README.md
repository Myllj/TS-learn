# d.ts 类型声明文件学习

## 配置步骤

```
//进入当前文件夹下
cd  4-声明文件

//生成tsconfig.json
tsc --init

//生成默认package.json
npm init -y

//npm下载express和axios用于测试本项目
npm i experss
npm i axios
```

## 案例记录过程
声明文件 declare  
当使用第三方库 时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能

```
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
/// <reference /> 三斜线指令
```



例如我们有一个express 和 axios

![image-20260509194522267](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/image-20260509194522267.png)



发现express 报错了

让我们去下载 他的声明文件

npm install @types/node -D

那为什么axios 没有报错

我们可以去node_modules 下面去找axios 的package json

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/27faf9d991af65ba98bc1006fd5eddea.png)



发现axios已经指定了声明文件 所以没有报错可以直接用

通过语法declare 暴露我们声明的axios 对象

declare const axios: AxiosStatic;

如果有一些第三方包确实没有声明文件我们可以自己去定义

名称.d.ts 创建一个文件去声明



## 案例手写声明文件

index.ts

```typescript
import express from 'express'
 
const app = express()
 
const router = express.Router()
 
app.use('/api', router)
 
router.get('/list', (req, res) => {
    res.json({
        code: 200
    })
})
 
app.listen(9001,()=>{
    console.log(9001)
})
```



express.d.ts

```typescript
declare module 'express' {
    interface Router {
        get(path: string, cb: (req: any, res: any) => void): void
    }
    interface App {
 
        use(path: string, router: any): void
        listen(port: number, cb?: () => void): void
    }
    interface Express {
        (): App
        Router(): Router
 
    }
    const express: Express
    export default express
}
```

