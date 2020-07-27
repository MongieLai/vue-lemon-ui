const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('Col存在.', () => {
        expect(Col).to.be.exist
    })

    it('col组件接收span属性', () => {
        const RowConstructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const propsData = {
            span: 1
        }
        const vm = new RowConstructor({
            propsData
        }).$mount(div)
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })

    it('col组件接收offset属性', () => {
        const RowConstructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const propsData = {
            offset: 1
        }
        const vm = new RowConstructor({
            propsData
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })

    it('col组件接收phone属性', () => {
        const RowConstructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const propsData = {
            phone: {
                span:1,
                offset:1
            }
        }
        const vm = new RowConstructor({
            propsData
        }).$mount(div)
        expect(vm.$el.classList.contains('col-phone-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-phone-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })


    it('col组件接收ipad属性', () => {
        const RowConstructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const propsData = {
            ipad: {
                span:1,
                offset:1
            }
        }
        const vm = new RowConstructor({
            propsData
        }).$mount(div)
        expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-ipad-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })


    it('col组件接收narrowPc属性', () => {
        const RowConstructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const propsData = {
            narrowPc: {
                span:1,
                offset:1
            }
        }
        const vm = new RowConstructor({
            propsData
        }).$mount(div)
        expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })

    it('col组件接收widePc属性', () => {
        const RowConstructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const propsData = {
            widePc: {
                span:1,
                offset:1
            }
        }
        const vm = new RowConstructor({
            propsData
        }).$mount(div)
        expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-wide-pc-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
})