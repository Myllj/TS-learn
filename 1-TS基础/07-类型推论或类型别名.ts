//什么是类 型推论
//1.我声明了一个变量但是没有定义类型
//TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
//所以TS帮我推断出来这是一个string类型
let str = "小满zs"

// str=123 //报错，不能够在赋值给别的类型


//2、如果你声明变量没有定义类型也没有赋值这时候TS会推断成any类型可以进行任何操作
let XiaoLang
XiaoLang=123
XiaoLang="小浪"
XiaoLang=true 


//类型别名
/* type 和 interface 还是一些区别的 虽然都可以定义类型
1.interface可以继承  type 只能通过 & 交叉类型合并
2.type 可以定义 联合类型 和 可以使用一些操作符 interface不行
3.interface 遇到重名的会合并 type 不行 */


//type 关键字（可以给一个类型定义一个名字）多用于复合类型
//1、 定义类型别名
// type str = string
// let s:str = "我是小满"
// console.log(s);


//2、 定义函数别名
// type str = () => string
// let s: str = () => "我是小满"
// console.log(s);


//3、定义联合类型别名
type str = string | number
let s: str = 123
let s2: str = '123'
console.log(s,s2);
