import Row from '../src/row.vue'
import Col from '../src/col.vue'
export default {
    install(Vue, options) {
        Vue.component('l-row', Row)
        Vue.component('l-col', Col)
    }
}