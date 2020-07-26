import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-input', Input)
Vue.component('l-row',Row)
Vue.component('l-col',Col)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            inputMessage: 'test'
        }
    },
    methods: {
        xxx(e) {
            console.log(e)
        }
    }
})