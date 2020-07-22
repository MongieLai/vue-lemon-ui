const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('l-input', () => {
    const Constructor = Vue.extend(Input)
    let vm
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        afterEach(() => {
            vm.$destroy()
        })
        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'hello'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.eq('hello')
        })
        it('接收disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.eq(true)
        })
        it('接收readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.eq(true)
        })
        it('接收error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你输错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.eq('#l-error')
            const spanElement = vm.$el.querySelector('span')
            expect(spanElement.innerHTML).to.eq('你输错了')
        })
    })
    describe('事件', () => {
        afterEach(() => {
            vm.$destroy()
        })
        it('支持change/blur/input/focus事件', () => {
            ['change', 'blur', 'input', 'focus'].map(eventName => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                let inputElement = vm.$el.querySelector('input')
                let event = new Event(eventName);
                Object.defineProperty(event, 'target', {
                    value: { value: 'hollow' }
                })
                inputElement.dispatchEvent(event);
                vm.$el.click()
                expect(callback).to.have.been.calledWith('hollow')
            })

        })
        // it('支持blur事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('blur', callback)
        //     let inputElement = vm.$el.querySelector('input')
        //     let event = new Event('blur');
        //     inputElement.dispatchEvent(event);
        //     vm.$el.click()
        //     expect(callback).to.have.been.called
        // })
        // it('支持input事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('input', callback)
        //     let inputElement = vm.$el.querySelector('input')
        //     let event = new Event('input');
        //     inputElement.dispatchEvent(event);
        //     vm.$el.click()
        //     expect(callback).to.have.been.called
        // })
        // it('支持focus事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('focus', callback)
        //     let inputElement = vm.$el.querySelector('input')
        //     let event = new Event('focus');
        //     inputElement.dispatchEvent(event);
        //     vm.$el.click()
        //     expect(callback).to.have.been.calledWith()
        // })
    })
})