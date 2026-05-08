//1. class 的基本用法 继承 和 类型约束
//2. class 的修饰符 readonly  private protected public
//3. super 原理
//4. 静态方法
//5. get set
interface Options {
    el: string | HTMLElement
}
 
interface VueCls {
    init(): void
    options: Options
}
 
interface Vnode {
    tag: string
    text?: string
    props?: {
        id?: number | string
        key?: number | string | object
    }
    children?: Vnode[]
}
 
class Dom {
    constructor() {
 
    }
 
    private createElement(el: string): HTMLElement {
        return document.createElement(el)
    }
 
    protected setText(el: Element, text: string | null) {
        el.textContent = text;
    }
 
    protected render(createElement: Vnode): HTMLElement {
        const el = this.createElement(createElement.tag)
        if (createElement.children && Array.isArray(createElement.children)) {
            createElement.children.forEach(item => {
                const child = this.render(item)
                this.setText(child, item.text ?? null)
                el.appendChild(child)
            })
        } else {
            this.setText(el, createElement.text ?? null)
        }
        return el;
    }
}
 
 
 
class Vue extends Dom implements VueCls {
    options: Options
    constructor(options: Options) {
        super()
        this.options = options;
        this.init()
    }
 
   static version () {
      return '1.0.0'
   }
 
   public init() {
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        let data: Vnode = {
            tag: "div",
            props: {
                id: 1,
                key: 1
            },
            children: [
                {
                    tag: "div",
                    text: "子集1",
                },
                {
                    tag: "div",
                    text: "子集2"
                }
            ]
        }
        app?.appendChild(this.render(data))
        console.log(app);
 
        this.mount(app as Element)
    }
 
   public mount(app: Element) {
        document.body.append(app)
    }
}
 
 
const v = new Vue({
    el: "#app"
})