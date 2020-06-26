import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group',ButtonGroup)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: true
        }
    },
    methods:{
        xxx(){
            console.log(111)
        }
    }
})