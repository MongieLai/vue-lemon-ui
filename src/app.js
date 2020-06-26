import Vue from 'vue'
import Button from './button'
import Icon from './icon'
console.log(Icon)
Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
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