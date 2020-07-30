const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    const ToastConstructor = Vue.extend(Toast)
    it('toast存在.', () => {
        expect(Toast).to.be.exist
    })
    describe('poops', function () {
        it('接受autoClose', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const vm = new ToastConstructor({
                propsData: {
                    autoClose: 1
                }
            }
            ).$mount(div)
            vm.$on('beforeClose', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        // it('接受closeButton', () => {
        //     const callback = sinon.fake();
        //     const vm = new ToastConstructor({
        //         propsData: {
        //             closeButton: {
        //                 message: 'close',
        //                 callback
        //             }
        //         }
        //     }).$mount()
        //     const closeButton = vm.$el.querySelector('span')
        //     expect(closeButton.textContent.trim()).to.eq('close')
        //     console.log(closeButton)
        //     closeButton.click()
        //     expect(callback).to.have.been.called
        // })

        it('接受 closeButton', () => {
            const callback = sinon.fake();
            const vm = new ToastConstructor({
                propsData: {
                    closeButton: {
                        message: '关闭吧',
                        callback,
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.been.called
        })

        it('接受enableHtml', () => {
            const vm = new ToastConstructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = '<strong id="test"></strong>'
            vm.$mount()
            const strongElement = vm.$el.querySelector('#test')
            expect(strongElement).to.be.exist
        })


        it('接受position', () => {
            const vm = new ToastConstructor({
                propsData: {
                    position: 'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
        })

    })

})