//联合类型，表示取值可以为多种类型中的一种
//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
let myPhone: number | string  = '010-820'
 
 
//这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值
// let myPhone: number | string  = true

//2、函数使用联合类型、
const fn = (something:number | boolean):boolean => {
     return !!something
}

/**
 * 交叉类型
 * 多种类型的集合，联合对象将具有所联合类型的所有成员
 */
interface People {
  age:number,
  height: number
}
interface Man{
  sex: string
}
const xiaoman = (man: People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}
xiaoman({age: 18,height: 180,sex: 'male'});
