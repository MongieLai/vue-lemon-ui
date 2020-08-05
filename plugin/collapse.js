import Collapse from '../src/collapse.vue'
import CollapseItem from '../src/collapse-item.vue'
export default {
    install(Vue, options) {
        Vue.component('l-collapse', Collapse)
        Vue.component('l-collapse-item', CollapseItem)
    }
}