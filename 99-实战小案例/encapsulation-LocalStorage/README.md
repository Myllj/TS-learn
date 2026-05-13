# 案例之-typescript封装LocalStorage并支持过期时间



**思考**
在我们使用cookie的时候是可以设置有效期的，但是localStorage本身是没有该机制的，只能人为的手动删除，否则会一直存放在浏览器当中，可不可以跟cookie一样设置一个有效期。如果一直存放在浏览器又感觉有点浪费，那我们可以把localStorage进行二次封装实现该方案。

## 实现思路

在存储的时候设置一个过期时间，并且存储的数据进行格式化方便统一校验，在读取的时候获取当前时间进行判断是否过期，如果过期进行删除即可。



## 项目和环境搭建

**目录结构**

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/755be8b1e900a236aee0a0d91603e9d6.png)



1. 新建文件如上图

2. tsc --init生成tsconfig.json文件

3. npm i init -y生成package.json文件，然后安装依赖npm i rollup rollup-plugin-typescript2 typescript，添加配置项

   ```json
   "scripts": {
     "build": "rollup -c"
    },
   ```

   

4. 新建rollup.config.js文件，然后添加下面对应代码

5. 代码编写完成，npm run build打包，在index.html文件里引入打包后的index.js文件，最后live server预览index.html查看效果



## 代码实现

enum ts 定义枚举

```typescript
//字典 Dictionaries    expire过期时间key    permanent永久不过期
export enum Dictionaries {
    expire = '__expire__',
    permanent = 'permanent'
}
```



type ts 定义类 型

```typescript
import { Dictionaries } from "../enum"
export type Key = string //key类型
export type expire = Dictionaries.permanent | number //有效期类型
export interface Data<T> {  //格式化data类型
    value: T
    [Dictionaries.expire]: Dictionaries.expire | number
}
export interface Result<T> { //返回值类型
    message: string,
    value: T | null
}
export interface StorageCls { //class方法约束
    set: <T>(key: Key, value: T, expire: expire) => void
    get: <T>(key: Key) => Result<T | null>
    remove: (key: Key) => void
    clear: () => void
}
```



index.ts 主要逻辑实现

```typescript
import { StorageCls, Key, expire, Data,Result } from "./type";
import { Dictionaries } from "./enum";
export class Storage implements StorageCls {
    //存储接受 key value 和过期时间 默认永久
    public set<T = any>(key: Key, value: T, expire: expire = Dictionaries.permanent) {
    //格式化数据
        const data = {
            value,
            [Dictionaries.expire]: expire
        }
        //存进去
        localStorage.setItem(key, JSON.stringify(data))
    }
 
    public get<T = any>(key: Key):Result<T | null> {
        const value = localStorage.getItem(key)
        //读出来的数据是否有效
        if (value) {
            const obj: Data<T> = JSON.parse(value)
            const now = new Date().getTime()
            //有效并且是数组类型 并且过期了 进行删除和提示
            if (typeof obj[Dictionaries.expire] == 'number' && obj[Dictionaries.expire] < now) {
                  this.remove(key)
                  return {
                     message:`您的${key}已过期`,
                     value:null
                  }
            }else{
            //否则成功返回
                return {
                    message:"成功读取",
                    value:obj.value
                }
            }
        } else {
           //否则key值无效
            console.warn('key值无效')
            return {
                message:`key值无效`,
                value:null
             }
        }
    }
    //删除某一项
    public remove(key:Key) {
        localStorage.removeItem(key)
    }
    //清空所有值
    public clear() {
       localStorage.clear()
    }
}
 
```



rollup.js `简易打包暂时没有写的很复杂` 所用到的依赖 rollup rollup-plugin-typescript2 typescript

旧版写法

```typescript
import ts from 'rollup-plugin-typescript2'
import path from 'path'
export default {
     input:'./src/index.ts',
     output:{
         file:path.resolve(__dirname,'./dist/index.js')
     },
     plugins:[
        ts()
     ]
}
```

 新版写法

```typescript
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import {fileURLToPath} from 'url'
const metaUrl = fileURLToPath(import.meta.url)
const dirName = path.dirname(metaUrl)
export default {
     input:'./src/index.ts',
     output:{
         file:path.resolve(dirName,'./dist/index.js')
     },
     plugins:[
        ts()
     ]
}
```



## 代码测试

```html
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
 
<body>
    <script type="module">
        import { Storage } from './dist/index.js'
        const sl = new Storage()
        //五秒后过期
        sl.set('a', 123, new Date().getTime() + 5000)
 
        setInterval(() => {
            const a = sl.get('a')
            console.log(a)
        },500)
    </script>
</body>
 
</html>
```



测试五秒后过期增加计时器观察值

过期之后 成功删除 测试成功

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/fc7a5f3c0c2cfacf26c97af3f18b824c.png)