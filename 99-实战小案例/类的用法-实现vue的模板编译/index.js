"use strict";
class Dom {
    constructor() {
    }
    createElement(el) {
        return document.createElement(el);
    }
    setText(el, text) {
        el.textContent = text;
    }
    render(createElement) {
        var _a;
        const el = this.createElement(createElement.tag);
        if (createElement.children && Array.isArray(createElement.children)) {
            createElement.children.forEach(item => {
                var _a;
                const child = this.render(item);
                this.setText(child, (_a = item.text) !== null && _a !== void 0 ? _a : null);
                el.appendChild(child);
            });
        }
        else {
            this.setText(el, (_a = createElement.text) !== null && _a !== void 0 ? _a : null);
        }
        return el;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    static version() {
        return '1.0.0';
    }
    init() {
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        let data = {
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
        };
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
        console.log(app);
        this.mount(app);
    }
    mount(app) {
        document.body.append(app);
    }
}
const v = new Vue({
    el: "#app"
});
