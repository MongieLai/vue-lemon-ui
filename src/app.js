import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import plugin from './plugin.js'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsItem from './tabs-item.vue'
import TabsBody from './tabs-body.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'

Vue.use(plugin)

Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-input', Input)
Vue.component('l-row', Row)
Vue.component('l-col', Col)
Vue.component('l-layout', Col)
Vue.component('l-layout', Layout)
Vue.component('l-header', Header)
Vue.component('l-content', Content)
Vue.component('l-sider', Sider)
Vue.component('l-footer', Footer)
Vue.component('l-tabs-head', TabsHead)
Vue.component('l-tabs-item', TabsItem)
Vue.component('l-tabs-body', TabsBody)
Vue.component('l-tabs-pane', TabsPane)
Vue.component('l-tabs', Tabs)
Vue.component('l-popover', Popover)


new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            inputMessage: 'test',
            selectedTab: 'sports'
        }
    },
    methods: {
        xxx(e) {
        },
        hh() {
            this.$toast('很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字', {
                closeButton: {
                    message: '关闭',
                    callback: () => {
                        console.log('123123123')
                    }
                },
                position: 'middle',
                autoClose: false
            })
        }
    }
})