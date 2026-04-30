export {}

//普通声明
let a: string = "123";

//也可以使用es6的字符串模板
let str: string = `dddd${a}`;

//数字类型
let notANumber: number = NaN; //Nan
let num: number = 123; //普通数字
let infinityNumber: number = Infinity; //无穷大
let decimal: number = 6; //十进制
let hex: number = 0xf00d; //十六进制
let binary: number = 0b1010; //二进制
let octal: number = 0o744; //八进制s

//布尔类型
// let createdBoolean: boolean = new Boolean(1)
//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象

//事实上 new Boolean() 返回的是一个 Boolean 对象 需要改成
let createdBoolean: Boolean = new Boolean(1);
let booleand: boolean = true; //可以直接使用布尔值
let booleand2: boolean = Boolean(1); //也可以通过函数返回布尔值


/** 4.空值类型
JavaScript  没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数*/
function voidFn(): void {
    console.log('test void')
}


//Null和undefined类型
let u: undefined = undefined;//定义undefined
let n: null = null;//定义null

/**void 和 undefined 和 null 最大的区别
与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量 */
//这样写会报错 void类型不可以分给其他类型
// let test: void = undefined;
// let num2: string = "1";

// num2 = test; //报错，不能将 void 类型分配给 string 类型
