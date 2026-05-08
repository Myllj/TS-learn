/*
 * @Descripttion: 
 * @version: 
 * @Author: llj
 * @email: 
 * @Date: 2026-05-07 21:54:05
 * @LastEditors: llj
 * @LastEditTime: 2026-05-07 22:25:54
 */

/**
 * 抽象类，抽象成员
 * TypeScript 允许在类的定义前面，加上关键字abstract，表示该类不能被实例化，只能当作其他类的模板。这种类就叫做“抽象类”（abstract class）。
 * 
 * 这里有几个注意点。
（1）抽象成员只能存在于抽象类，不能存在于普通类。
（2）抽象成员不能有具体实现的代码。也就是说，已经实现好的成员前面不能加abstract关键字。
（3）抽象成员前也不能有private修饰符，否则无法在子类中实现该成员。
（4）一个子类最多只能继承一个抽象类。
总之，抽象类的作用是，确保各种相关的子类都拥有跟基类相同的接口，可以看作是模板。其中的抽象成员都是必须由子类实现的成员，非抽象成员则表示基类已经实现的、由所有子类共享的成员。
 */


/* abstract class A {
  id = 1;
}

const a = new A(); // 不能被实例化，报错 */


//2、抽象类只能当作基类使用，用来在它的基础上定义子类。
/* abstract class A {
  id = 1;
}

class B extends A {
  amount = 100;
}

const b = new B();

b.id // 1
b.amount // 100
console.log(b.id, b.amount); // 1 100 */


//3、抽象类的子类也可以是抽象类，也就是说，抽象类可以继承其他抽象类。
abstract class AbstractA {
  abstract foo:number;
}

abstract class AbstractB extends AbstractA {
  abstract bar:string;
}
console.log(123);


