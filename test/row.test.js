const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('Row存在.', () => {
        expect(Row).to.be.exist
    })
    it('row组件接收gutter属性.', (done) => {
        Vue.component('l-row', Row)
        Vue.component('l-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <l-row gutter="20">
                <l-col span='12'></l-col>
                <l-col span='12'></l-col>
            </l-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        }, 1000)
    })
    it('接收align属性', () => {
        const RowConstructor = Vue.extend(Row)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const propsData = {
            align: 'center'
        }
        const vm = new RowConstructor({
            propsData
        }).$mount(div)
        expect(getComputedStyle(vm.$el).justifyContent).to.eq('center')
        vm.$el.remove()
        vm.$destroy()
    })

})