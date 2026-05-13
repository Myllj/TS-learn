

TypeScript 类型运算符

具体所有类型运算符可查看[阮一峰的TS教程](https://wangdoc.com/typescript/operator#navbar)

## infer

言简意赅，infer就是**推导泛型参数**

infer声明只能出现在extends子语句中

简单的例子获取Promise的返回值

```typescript
interface User {
    name:string
    age:number
}
 
type Result = Promise<User>
 
type PromiseRes<T> = T extends Promise<infer R> ? R : never
 
type r = PromiseRes<Result>
```



![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/357e3f8cd9f0ed8411f2cd9a7ba3b995.png)



如果遇到了多层的情况可以使用递归

```typescript
interface User {
    name:string
    age:number
}
 
type Result = Promise<Promise<Promise<User>>>
 
type PromiseRes<T> = T extends Promise<infer R> ? PromiseRes<R> : T
 
type r = PromiseRes<Result>
```



![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/9f8ddb00ccae8bedeb2e07d72fc95192.png)

 

infer 的协变

```typescript
let obj = {
    name:'小满',
    age:123
}
type protyKey<T> = T extends {name:infer N,age:infer A}  ? [N,A]  : T
 
type res = protyKey<typeof obj>
```

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/21d5ee63c4be51a1843dad63584fac33.png)



获取对象属性的类 型并且返回元组类型

```typescript
let obj = {
    name:'小满',
    age:123
}
type protyKey<T> = T extends {name:infer U,age:infer U}  ? U  : T
 
type res = protyKey<typeof obj>
```

如果同一个对象使用一个变量就会产生协变，返回值就是联合类型

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/8a77e4ecb622db195920b2eaa28350cd.png)



infer的逆变

```typescript
type FnType<T> = T extends {
    a:(args:infer U)=>void,
    b:(args:infer U)=>void
} ? U : never
 
type T = FnType<{a:(args:number)=>void,b:(args:string)=>void}>
```

 函数会产生逆变，此时返回的值是一个交叉类型 string & number 怎么可能一个类型同时是string又是number不可能所以是never

**总结**
在协变位置上同一个类型变量的多个候选类型会被推断为联合类型；在逆变位置上，同一个类型变量的多个候选类型则会被推断为交叉类型



## infer 类型提取

我们用infer 实现四个简单的例子

### 1.提取头部元素

```typescript
type Arr = ['a','b','c']
 
type First<T extends any[]> =  T extends [infer First,...any[]] ? First : []
 
type a = First<Arr>
```

类 型参数 T 通过extends 约束 只能是数组类型，然后通过infer 声明局部 First 变量做提取，后面的元素可以是任意类型，然后把局部变量返回



### 2.提取尾部元素

```typescript
type Arr = ['a', 'b', 'c']
 
type Last<T extends any[]> = T extends [...any[], infer Last,] ? Last : []
 
type c = Last<Arr>
```

其实就是反过来就可以了



### 3.剔除第一个元素 Shift

```
type Arr = ['a','b','c']
 
type First<T extends any[]> =  T extends [unknown,...infer Rest] ? Rest : []
 
type a = First<Arr>
```

思路就是 我们除了第一个的元素把其他的剩余元素声明成一个变量 直接返回 就实现了我们的要求 剔除第一个元素



### 4.剔除尾部元素 pop

```typescript
type Arr = ['a','b','c']
 
type First<T extends any[]> =  T extends [...infer Rest,unknown] ? Rest : []
 
type a = First<Arr>
```

道理一样的 反过来就行了



## infer 递归

有这么一个类 型

```typescript
type Arr = [1, 2, 3, 4]
```

希望通过一个 ts 工具变成

```typescript
type Arr = [4,3,2,1]
```



完整代码

```typescript
type Arr = [1, 2, 3, 4]
 
type ReveArr<T extends any[]> = T extends [infer First, ...infer rest] ? [...ReveArr<rest>, First] : T
 
type Res = ReveArr<Arr>
```

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/8651b6e7a400b52c3b4deeac4b9cc462.png)

 具体思路 首先使用泛型约束 约束只能传入数组类型的东西 然后从数组中提取第一个，放入新数组的末尾，反复此操作，形成递归 满足结束条件返回该类型