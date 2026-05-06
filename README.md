# TS-learn！
这是一个学习TS的仓库！



# 学习资料及路径

+ 文档或书籍（资料准确性以官网为准，但是官网教程比较不友好，非常枯燥，上手难度大,晦涩难懂，建议可以先看TypeScript 入门教程，反复对比官网，提炼精华）（推荐学习顺序，优先级依次向下）
  + 官方：
    + [官网文档](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html) （中文版）
    + [TypeScript手册（英文版）](https://www.typescriptlang.org/docs/)
  + 其他：
    + [TypeScript 入门教程](https://ts.xcatliu.com/advanced/type-aliases.html)
    + [TypeScript 教程-阮一峰著](https://wangdoc.com/typescript/)
    + [TypeScript 使用手册](https://github.com/zhongsp/TypeScript) （大多借鉴官网文档中文版）
    + [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)
+ 视频教程
  + 免费
    + [尚硅谷TypeScript教程](https://www.bilibili.com/video/BV1Xy4y1v7S2?spm_id_from=333.337.search-card.all.click)
    + [Typescript教程_Typescript视频教程 ts入门实战视频教程-2021年更新 包含Vue3+Ts](https://www.bilibili.com/video/BV1yt411e7xV?spm_id_from=333.337.search-card.all.click)
  + [慕课网：基于 TypeScript 从零重构 axios](https://coding.imooc.com/class/330.html)
  + [极客时间： TypeScript 开发实战](https://time.geekbang.org/course/intro/100032201?tab=intro)
+ 博客（加粗项是博主系列教程，其他项是单篇博客文章）

  + **[后盾人-TypeScript教程](https://doc.houdunren.com/typescript/1%20%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html#%E4%BB%8B%E7%BB%8D)**
  + [通俗易懂的 TS 教程，入门 + 实战](https://mp.weixin.qq.com/s/H9JryV416b6PVuEcemQRhA) （博主总结的TypeScript基础入门，学完基本可以上手，应付业务。建议跟着手敲一遍）
  + [一份不可多得的 TS 学习指南](https://juejin.cn/post/6872111128135073806#heading-113) （掘金热文，总结比较全）
  + [写给初中级前端的高级进阶指南（万字路线）](https://mp.weixin.qq.com/s/0jtVxlh-toEmNbwJpIfAuA) （该篇博客不仅仅分享高级前端进阶指南，还分享了TypeScript的入门、进阶、实战等等可以参考）
+ 案例

  + **[TypeScript 类型体操](https://github.com/type-challenges/type-challenges/blob/master/README.zh-CN.md) （github高star项目，有很多案例，区分难易程度）**

  + [TS 一些工具泛型的使用及其实现](https://zhuanlan.zhihu.com/p/40311981) （工具泛型在日常开发中都非常的常用，必须熟练掌握。）
+ 工具

  + **[Playground](https://www.typescriptlang.org/play?#code/PTAEiJrQ5+MU3NAYlUAqBPADgUwMoGMBOBLFAF1EBR7QYb9AudUBh-gKBFEE34wejNAAOUCo5QTb9ADeUAXjQbPlAaP6BMxSqAwJUDVcoBiVQGbagAzlEqTLgLFAIW6BFf0CbXoCAGGnTCAKg0D3yoFO5E4CDNQNBygSDlAs56BO00Dw+oH95QBSugYO1AWP-79oUAFpQdkBYOUAseUAWD0B5dUBvuUBVeUAcOUB-SNU5BXRsfCJQVUAGdXtdegCgtkBleUAYrLSlTOJAW+jAVZtANz1AODlAaojALrkJXPzfIvZXQDi5QGlbQFXo4MAYFUqMlVABQEXowHxzQHylQF+A1UBMm0BG710aLAB7ADsAZ2IAQ32AUQAPE4BbFAAbNAA1E-wTgCNH0ABeUAAiAASaHu912oAA6rscPcACZ-HYHQ67R4AOlBAHMABRnK63B7PV54D6PACUenopkAnQ6Ab8VAFBy9lUoEAOASALk9ANHygFwCUCANCNmYAG00A36kcqgmQBhcoBjyMAL2aALE1AM6K-RqgAAo1SAQ-lAPYG2nh9G5gFAAwAESoATNIYgGy5QAXNoApxIagBQ5QAA+oBpzTcVEALqZscgUVSANDlADKugF+EwB6Ov0uLo-EA) （TypeScript官网在线编写运行TS代码）**



# 常见问题汇总及命令！

```bash
//1.运行tsc --init,创建tsconfig.json
tsc --init
```

## 如何调试多个.ts文件？

```bash
//安装
npm install -g typescript ts-node
```



```bash
//新建main.ts，文件里引入如下文件
import './01-基础类型'
import './02-数组类型'
import './03-元组'
import './04-对象类型'
// ...所有你要运行的文件
```



```bash
//运行
ts-node main.ts
```





# 一、TS 安装方式（唯一标准答案）

## ✅ 官方推荐 / 行业标准：**全局安装 TypeScript**

```bash
npm install -g typescript
```

这是**所有人都在用**的方式。



# 二、TS 运行 / 调试方式（3 种主流，按推荐度排序）

**强烈推荐：**  学习阶段，不用去考虑配环境的问题，直接去官网在线工具跑 [Playground](https://www.typescriptlang.org/play?#code/PTAEiJrQ5+MU3NAYlUAqBPADgUwMoGMBOBLFAF1EBR7QYb9AudUBh-gKBFEE34wejNAAOUCo5QTb9ADeUAXjQbPlAaP6BMxSqAwJUDVcoBiVQGbagAzlEqTLgLFAIW6BFf0CbXoCAGGnTCAKg0D3yoFO5E4CDNQNBygSDlAs56BO00Dw+oH95QBSugYO1AWP-79oUAFpQdkBYOUAseUAWD0B5dUBvuUBVeUAcOUB-SNU5BXRsfCJQVUAGdXtdegCgtkBleUAYrLSlTOJAW+jAVZtANz1AODlAaojALrkJXPzfIvZXQDi5QGlbQFXo4MAYFUqMlVABQEXowHxzQHylQF+A1UBMm0BG710aLAB7ADsAZ2IAQ32AUQAPE4BbFAAbNAA1E-wTgCNH0ABeUAAiAASaHu912oAA6rscPcACZ-HYHQ67R4AOlBAHMABRnK63B7PV54D6PACUenopkAnQ6Ab8VAFBy9lUoEAOASALk9ANHygFwCUCANCNmYAG00A36kcqgmQBhcoBjyMAL2aALE1AM6K-RqgAAo1SAQ-lAPYG2nh9G5gFAAwAESoATNIYgGy5QAXNoApxIagBQ5QAA+oBpzTcVEALqZscgUVSANDlADKugF+EwB6Ov0uLo-EA) 

## 🏆 第 Top名：当前

采用ts-node+nodemon方式，nodemon的好处是启动一个服务，修改文件自动更新，不用反复输入命令，相当于热更新

```bash
npm install -g ts-node
npm i -g nodemon
```

**配置script简化命令**

```json
 "scripts": {
  "dev": "nodemon --watch TS基础 -e ts --exec ts-node TS基础/index.ts"
 },
```

![image-20260430213217066](https://cdn.jsdelivr.net/gh/Myllj/img-bed@main/images/AI-learn/image-20260430213217066.png)

**调试**

npm run dev就可以了



## 🏆 第 1 名：**ts-node**（最适合学习、最常用、最方便）

### 作用

直接运行 `.ts` 文件，**不用编译、不用转 js、不用配置**。

### 安装

```bash
npm install -g ts-node
```

### 使用（直接跑 TS）

```bash
ts-node 文件名.ts
```

### 优点

- 不用 `tsc` 编译
- 不用看 `dist` 目录
- 不用处理模块冲突
- 调试最快
- **前端学习 TypeScript 首选工具**

------

## 🥈 第 2 名：**tsc + 配置文件**（工程化标准）

### 作用

正式项目、打包、生产环境使用。

### 流程

1. 写 `tsconfig.json`
2. 运行 `tsc` 编译成 js
3. 用 `node` 运行

### 适合

**真实项目开发**

------

## 🥉 第 3 名：**bundler (vite / webpack)**

### 作用

前端框架（Vue/React）项目里用。

### 适合

**框架开发，不是基础学习**

------



# 三、我给你的 **最终推荐（最适合你现在的学习）**

## ✅✅✅ **唯一推荐：ts-node**

你现在遇到的所有麻烦：

- 跨文件变量重复报错
- 配置不生效
- 编译报错
- 目录结构问题
- dist 文件夹混乱

**用 ts-node 全部自动解决！**

------



# 四、你现在只需要做这 2 步（10 秒解决所有问题）

## 1. 安装工具

```bash
npm install -g typescript ts-node
```

## 2. 直接运行 TS 文件

```bash
ts-node TS基础/04-元组.ts
```

✅ **不用配置**

✅ **不用 tsconfig**

✅ **不用 export {}**

✅ **不会报变量重复**

✅ **不会生成 dist**

✅ **直接输出结果**

------



# 五、为什么我强烈推荐你用 ts-node？

因为：

- 你现在是**学习阶段**，不是做项目
- 学习要的是：**快、简单、不报错**
- `ts-node` 就是为学习 TS 而生

**90% 教 TS 的老师、博主、教程全都用 ts-node！**

------



# 六、一句话总结（前端行业标准）

### 学习 TypeScript → **ts-node**（最方便）

### 做项目 → **tsc / vite**