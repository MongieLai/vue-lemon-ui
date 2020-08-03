import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'
import Icon from '../src/icon.vue'
export default {
    install(Vue, options) {
        Vue.component('l-button', Button)
        Vue.component('l-icon', Icon)
        Vue.component('l-button-group', ButtonGroup)
        let checkScript = false;
        const scripts = document.querySelectorAll("script");
        scripts.forEach((node) => {
            if (node.src === "http://at.alicdn.com/t/font_1906917_b7gf46r58hn.js") {
                checkScript = true;
                return;
            }
        });
        if (checkScript) {
            return;
        }
        const script = document.createElement("script");
        script.src = "//at.alicdn.com/t/font_1906917_b7gf46r58hn.js";
        document.body.appendChild(script);
    }
}