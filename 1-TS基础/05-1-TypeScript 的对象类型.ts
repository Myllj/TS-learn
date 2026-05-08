
/**
 * 简介
除了原始类型，对象是 JavaScript 最基本的数据结构。TypeScript 对于对象类型有很多规则。
对象类型的最简单声明方法，就是使用大括号表示对象，在大括号内部声明每个属性和方法的类型。
 */

//对象obj的类型就写在变量名后面，使用大括号描述，内部声明每个属性的属性名和类型。
//属性的类型可以用分号结尾，也可以用逗号结尾。
const obj:{
  x:number;
  y:number;
} = { x: 1, y: 1 };


// 属性类型以分号结尾
// type MyObj = {
//   x:number;
//   y:number;
// };

// 属性类型以逗号结尾
// type MyObj = {
//   x:number,
//   y:number,
// };


/**
 * 对象类型的声明方式有两种，一种是使用type命令为对象类型声明一个别名，另一种是使用interface命令为对象类型声明一个接口。
 * 除了type命令可以为对象类型声明一个别名，TypeScript 还提供了interface命令，可以把对象类型提炼为一个接口。
 */
// 写法一
// type MyObj = {
//   x:number;
//   y:number;
// };

// 写法二
interface MyObj {
  x: number;
  y: number;
}