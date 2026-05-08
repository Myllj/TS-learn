/**
 * 类的 interface 接口
 */


//  1、implements 关键字
//  interface 接口或 type 别名，可以用对象的形式，为 class 指定一组检查条件。然后，类使用 implements 关键字，表示当前类满足这些外部类型条件的限制。
interface Country {
  name:string;
  capital:string;
}
// 或者
// type Country = {
//   name:string;
//   capital:string;
// }

class MyCountry implements Country {
  name = '';
  capital = '';
}


//2、实现多个接口,类可以实现多个接口（其实是接受多重限制），每个接口之间使用逗号分隔。
/* class Car implements MotorVehicle, Flyable, Swimmable {
  // ...
} */


//3、类与接口的合并
//TypeScript 不允许两个同名的类，但是如果一个类和一个接口同名，那么接口会被合并进类。
/* class A {
  x:number = 1;
}

interface A {
  y:number;
}

let a = new A();
a.y = 10;

a.x // 1
a.y // 10
console.log(a.x, a.y); // 1 10 */


//4、接口继承接口，接口与接口之间可以是继承关系：
/* interface Alarm {
    alert(): void;
}

interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
let obj11:LightableAlarm={
  alert() {
    console.log('alert');
  },
  lightOn() {
    console.log('light on');
  },
  lightOff() {
    console.log('light off');
  }
}
console.log(obj11); */


//5、接口继承类，接口还可以继承一个类，这时接口会继承类的成员，但不包括实现。接口同样也会继承类的 private 和 protected 成员，这就意味着，只有这个类或其子类才能实现这个接口。
class Point {
  x: number = 0;
  y: number = 0;
} 
interface Point3D extends Point {
  z: number;
} 
let point3d: Point3D = { x: 1, y: 2, z: 3 };
console.log(point3d);