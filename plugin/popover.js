import Layout from '../src/layout.vue'
import Header from '../src/header.vue'
import Sider from '../src/sider.vue'
import Content from '../src/content.vue'
import Footer from '../src/footer.vue'
export default {
    install(Vue, options) {
        Vue.component('l-layout', Layout)
        Vue.component('l-header', Header)
        Vue.component('l-sider', Sider)
        Vue.component('l-content', Content)
        Vue.component('l-footer', Footer)
    }
}