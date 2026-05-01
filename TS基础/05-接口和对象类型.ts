//对象的类 型
//在typescript中，我们定义对象的方式要用关键字interface（接口），我的理解是使用interface来定义一种约束，让数据的结构满足约束的格式。定义方式如下：

//一、
//这样写是会报错的 因为我们在person定义了a，b但是对象里面缺少b属性
//使用接口约束的时候不能多一个属性也不能少一个属性
//必须与接口保持一致
/* interface Person {
    b:string,
    a:string
}
 
const person:Person  = {
    a:"213"
} */


//二、重名interface  可以合并
/* interface A{name:string}
interface A{age:number}
var x:A={name:'xx',age:20}
//继承
interface A{
    name:string
}
 
interface B extends A{
    age:number
}
 
let obj:B = {
    age:18,
    name:"string"
}
console.log(obj); */


//三、可选属性 使用?操作符
//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
/* interface Person {
    b?:string,
    a:string
}
 
const person:Person  = {
    a:"213"
}
console.log(person); */

//四、任意属性 [propName: string]
//需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
/* interface Person {
    b?:string,
    a:string,
    [propName: string]: any;
}
 
const person:Person  = {
    a:"213",
    c:"123"
}
console.log(person); */

//五、只读属性 readonly
//只读属性只能在对象刚刚创建的时候被赋值，以后就不能再修改了
/* interface Person1 {
    name:string,
    age?:number,
    readonly id:number,
    [propName: string]: any;
}

const myPerson:Person1  = {
    name:"213",
    // age:18,
    id:123,
    acb:"123"
}
// myPerson.id=1234;//报错 不能修改只读属性
console.log(myPerson); */

//六、添加函数
/* interface Person {
    b?: string,
    readonly a: string,
    [propName: string]: any;
    cb:()=>void
}
 
const person: Person = {
    a: "213",
    c: "123",
    cb:()=>{
        console.log(123)
    }
}
console.log(person); */
