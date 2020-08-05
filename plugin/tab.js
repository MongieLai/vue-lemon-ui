import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsPane from '../src/tabs-pane.vue'
export default {
    install(Vue, options) {
        Vue.component('l-tabs-head', TabsHead)
        Vue.component('l-tabs-item', TabsItem)
        Vue.component('l-tabs-body', TabsBody)
        Vue.component('l-tabs-pane', TabsPane)
        Vue.component('l-tabs', Tabs)
    }
}