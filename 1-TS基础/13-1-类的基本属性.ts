/* 
简介
类（class）是面向对象编程的基本构件，封装了属性和方法，TypeScript 给予了全面支持。
*/

/**
 * 1、属性
 * 1-1、属性的初始化检查，配置项"strictPropertyInitialization": true就会检查类的属性是否在构造函数中被正确初始化，不然报错
 * 1-2、readonly 修饰符
 * 1-3、可选属性
 * 1-4、属性列表设置默认值
 * 1-5、方法的类型
 */
/* class User {
  name: string;
  age: number;
  readonly id = "foo"; // 只读属性，必须在声明时或构造函数中初始化，之后不能修改
  pid?: string; // 可选属性
  gender: "男" | "女" = "男"; // 属性列表设置默认值
  //属性的初始化检查，配置项"strictPropertyInitialization": true就会检查类的属性是否在构造函数中被正确初始化，不然报错
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 方法的类型
  greet(name: string, age: number): string {    
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
}

let user = new User("llj", 18);
console.log(user.name); // llj
console.log(user.age); // 18
console.log(user.greet("llj2", 20)); // Hello, my name is llj2 and I am 20 years old.
console.log(user.id); // foo
// user.id = 'bar' // error: Cannot assign to 'id' because it is a read-only property.
 */

/**
 * 2、访问修饰符
 * 2-1、public	公开的，所有的代码均可访问【默认】
 * 2-2、private	私有的，只有在类中可以访问，在类的外部访问会报错，子类也无法访问
 * 2-3、protected	受保护的，只能在类的内部使用该成员，只有父类和子类可以访问
 */
/* class Greeter {
  private x:number = 0;
  protected y = 1;
  public greet() {
    console.log("hi!");
  }
}


class B extends Greeter {
  // showX() {
  //   console.log(this.x); // 报错，子类也无法访问
  // }
  showY() {
    console.log(this.y); // 1，子类可以访问
  }
}

const g = new Greeter();
g.greet(); // hi!
// g.x // 报错 */

/**
 * 3。实例属性的简写形式
 */
/* // class Point {
//   x:number;
//   y:number;

//   constructor(x:number, y:number) {
//     this.x = x;
//     this.y = y;
//   }
// }

//TypeScript 就提供了一种简写形式
class Point {
  constructor(
    public x:number,
    public y:number
  ) {}
}

const p = new Point(10, 10);
p.x // 10
p.y // 10 */

/**
 * 4、静态属性和方法
 * 4-1、静态属性和方法是属于类本身的，而不是实例的，可以通过类名直接访问
 * 4-2、静态属性和方法不能访问实例属性和方法，因为它们没有 this 上下文
 */
class MyClass {
  static staticProperty = "I am a static property";

  static staticMethod() {
    console.log('静态方法staticMethod被调用');
    console.log('我是一个静态方法，可以调用同为静态的属性和方法，可以通过类名和this调用：',this.staticProperty);
  }
  instanceMethod() {
    // console.log(this.staticProperty); // error: Property 'staticProperty' does not exist on type 'MyClass'.
  }
}
let myClass=new MyClass();
// myClass.staticProperty; // error: Property 'staticProperty' does not exist on type 'MyClass'.
MyClass.staticProperty; // I am a static property

MyClass.staticMethod(); // 静态方法staticMethod被调用
