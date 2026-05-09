//抽离命名空间,在a.ts中声明了一个命名空间V,在b.ts中引入a.ts中的V命名空间,并使用其中的属性a
export namespace V {
    export const a = 1
}