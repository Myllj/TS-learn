/*
 * @Descripttion: 
 * @version: 
 * @Author: llj
 * @email: 
 * @Date: 2026-05-09 16:08:36
 * @LastEditors: llj
 * @LastEditTime: 2026-05-09 16:23:24
 */
/**
 * 我们在工作中无法避免全局变量造成的污染，TypeScript提供了namespace 避免这个问题出现

内部模块，主要用于组织代码，避免命名冲突。
命名空间内的类默认私有
通过 export 暴露
通过 namespace 关键字定义


TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。
相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）
 */


/* 1-命名空间的定义和使用
命名空间中通过export将想要暴露的部分导出
如果不用export 导出是无法读取其值的
*/
/* namespace a {
    export const Time: number = 1000
    export const fn = <T>(arg: T): T => {
        return arg
    }
    fn(Time)
    let age: number = 19
    console.log(age);
    
}
 
 
namespace b {
     export const Time: number = 1000
     export const fn = <T>(arg: T): T => {
        return arg
    }
    fn(Time)
}
 
a.Time
b.Time
console.log(a.Time, b.Time)
// console.log(a.age) // 报错,error age 没有被export暴露无法访问 */


/* 2-命名空间的嵌套
命名空间内可以嵌套命名空间 
*/
/* namespace a {
    export namespace b {
        export class Vue {
            parameters: string
            constructor(parameters: string) {
                this.parameters = parameters
            }
        }
    }
}
 
let v1 = new a.b.Vue('2')
console.log(v1.parameters) */


/* 3-命名空间的合并
如果在同一个命名空间中定义了多个同名的成员，那么它们会被合并成一个成员。
*/  
namespace user {
    export const Time: number = 1000  
    export const fn = <T>(arg: T): T => {
        return arg
    } 
} 
namespace user {
    export const abc: number = 2000  
}
console.log(user);// 合并成 { Time: 1000, fn: [Function: fn], abc: 2000 }

