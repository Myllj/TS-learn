# 实战TS编写发布订阅模式

## 概述

发布订阅模式是一种常见的设计模式，在许多场景中都有应用。我们可能已经在使用中接触过发布订阅模式，比如使用 addEventListener 方法来监听 DOM 事件、Vue 的事件总线机制等。

简单来说，发布订阅模式就像是你和大傻、二傻、三傻一起打篮球。大傻负责带球，二傻负责带水，三傻负责带球衣。只有当他们都准备完成后，才开始打球。



## 思维导图

首先 需要定义三个角色 发布者 订阅者 调度者

![img](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/TS/ad962ad073ddcdac97b35430f9be3481.png)



## 实际案例

在 JavaScript 中，我们可以使用 DOM 2 级事件的 addEventListener 方法来订阅和监听事件。
在 Electron 中，使用 IpcMain 和 ipcRender 来实现主进程和渲染进程之间的事件通信。
在 Webpack 中，使用 Hooks 机制来订阅和处理构建过程中的各个阶段。
在 Vue 2 中，可以使用事件总线（Event Bus）机制来实现组件之间的通信。



## 具体代码

on订阅/监听

emit 发布/注册

once 只执行一次

off解除绑定

```javascript
interface EventFace {
    on: (name: string, callback: Function) => void;
    emit: (name: string, ...args: Array<any>) => void;
    off: (name: string, fn: Function) => void;
    once: (name: string, fn: Function) => void;
  }
  
  interface List {
    [key: string]: Array<Function>;
  }
  
  class Dispatch implements EventFace {
    list: List;
  
    constructor() {
      this.list = {};
    }
  
    // 订阅事件
    on(name: string, callback: Function) {
      const callbackList: Array<Function> = this.list[name] || [];
      callbackList.push(callback);
      this.list[name] = callbackList;
    }
  
    // 发布事件
    emit(name: string, ...args: Array<any>) {
      let eventName = this.list[name];
      if (eventName) {
        eventName.forEach(fn => {
          fn.apply(this, args);
        });
      } else {
        console.error('该事件未监听');
      }
    }
  
    // 解除绑定
    off(name: string, fn: Function) {
      let eventName = this.list[name];
      if (eventName && fn) {
        let index = eventName.findIndex(fns => fns === fn);
        eventName.splice(index, 1);
      } else {
        console.error('该事件未监听');
      }
    }
  
    // 一次性订阅
    once(name: string, fn: Function) {
      let decorator = (...args: Array<any>) => {
        fn.apply(this, args);
        this.off(name, decorator);
      };
      this.on(name, decorator);
    }
  }
  
  const o = new Dispatch();
  
  // 订阅事件 'abc'，输出参数和数字 1
  o.on('abc', (...arg: Array<any>) => {
    console.log(arg, 1);
  });
  
  // 一次性订阅事件 'abc'，输出参数和字符串 'once'，只会触发一次
  o.once('abc', (...arg: Array<any>) => {
    console.log(arg, 'once');
  });
  
  // 发布事件 'abc'，输出参数 1、true 和字符串 '小满'
  o.emit('abc', 1, true, '小满');
  
  // 再次发布事件 'abc'，输出参数 2、true 和字符串 '小满'
  o.emit('abc', 2, true, '小满');
```

