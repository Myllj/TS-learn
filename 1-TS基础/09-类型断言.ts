export {}
/**
 * 类型断言
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型。
 * 语法：　　值 as 类型　　或　　<类型>值  value as string  <string>value
 * 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：
 */
interface A {
       run: string
}
 
interface B {
       build: string
}
 
const fn = (type: A | B): string => {
      //  return type.run //报错，这样写是有警告的应为B的接口上面是没有定义run这个属性的

       return (type as A).run//可以使用类型断言来推断他传入的是A接口的值
}


//1、使用any临时断言
//这样写会报错因为window没有abc这个东西
// window.abc = 123

//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。
(window as any).abc = 123


//2、as const
//是对字面值的断言，与const直接定义常量是有区别的
//如果是普通类型跟直接const 声明是一样的
// const names = '小满'
// names = 'aa' //无法修改
 
// let names2 = '小满' as const
// names2 = 'aa' //无法修改

// 2-2、数组
let a1 = [10, 20] as const;
const a2 = [10, 20];
 
// a1.unshift(30); // 错误，此时已经断言字面量为[10, 20],数据无法做任何修改
a2.unshift(30); // 通过，没有修改指针


//3、as const 断言请查看
// https://wangdoc.com/typescript/assert#as-const-%E6%96%AD%E8%A8%80

// 如果没有声明变量类型，let 命令声明的变量，会被类型推断为 TypeScript 内置的基本类型之一；const 命令声明的变量，则被推断为值类型常量。

// 类型推断为基本类型 string
let s1 = 'JavaScript';

// 类型推断为字符串 “JavaScript”
const s2 = 'JavaScript';
// 上面示例中，变量s1的类型被推断为string，变量s2的类型推断为值类型JavaScript。后者是前者的子类型，相当于 const 命令有更强的限定作用，可以缩小变量的类型范围。

// 有些时候，let 变量会出现一些意想不到的报错，变更成 const 变量就能消除报错。

// let s = 'JavaScript';

type Lang =
  |'JavaScript'
  |'TypeScript'
  |'Python';

function setLang(language:Lang) {
  /* ... */
}

// setLang(s); // 报错
// 上面示例中，最后一行报错，原因是函数setLang()的参数language类型是Lang，这是一个联合类型。但是，传入的字符串s的类型被推断为string，属于Lang的父类型。父类型不能替代子类型，导致报错。

// 一种解决方法就是把 let 命令改成 const 命令。

// const s = 'JavaScript';
// 这样的话，变量s的类型就是值类型JavaScript，它是联合类型Lang的子类型，传入函数setLang()就不会报错。

// 另一种解决方法是使用类型断言。TypeScript 提供了一种特殊的类型断言as const，用于告诉编译器，推断类型时，可以将这个值推断为常量，即把 let 变量断言为 const 变量，从而把内置的基本类型变更为值类型。

let s = 'JavaScript' as const;
setLang(s);  // 正确