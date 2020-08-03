import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'
import Icon from '../src/icon.vue'
export default {
    install(Vue, options) {
        Vue.component('l-button', Button)
        Vue.component('l-icon', Icon)
        Vue.component('l-button-group', ButtonGroup)
    }
}