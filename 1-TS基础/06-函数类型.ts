 //函数的类型
 //1、注意，参数不能多传，也不能少传 必须按照约定的类型来
/* const fn = (name: string, age:number): string => {
    return name + age
}
fn('张三',18,20) //报错，参数过多 */


//2、函数参数的默认值
/* const fn = (name: string = "我是默认值"): string => {
    return name
}
fn() */


//3、接口定义函数
//定义参数 num 和 num2  ：后面定义返回值的类型
/* interface Add {
    (num:  number, num2: number): number
}
 
const fn: Add = (num: number, num2: number): number => {
    return num + num2
}
fn(5, 5)
 
 
interface User{
    name: string;
    age: number;
}
function getUserInfo(user: User): User {
  return user
}
console.log(getUserInfo({name: '张三', age: 18})); */


//4、定义剩余参数
/* const fn = (array:number[],...items:any[]):any[] => {
       console.log(array,items)
       return items
}
 
let a:number[] = [1,2,3]
 
fn(a,'4','5','6')
 */


/*5、函数重载
重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
如果参数类型不同，则参数类型应设置为 any。
参数数量不同你可以将不同的参数设置为可选。 */
/* function fn(params: number): void
 
function fn(params: string, params2: number): void
 
function fn(params: any, params2?: any): void {
 
    console.log(params)
 
    console.log(params2)
 
}
 
 
fn(123)
fn('123',456) */


//6、void返回值和never返回值的区别
//函数():void指该函数体里不应该有return返回值
function fn(): void {
  console.log(666);
  // return '';//不能return任何值
}

//函数():never代表该函数永远不可能执行完
function err(): never {
  throw new Error(); //因为这里报错，下面的代码将不会得到执行
  console.log(22);
}