const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
import TabsBody from '../src/tabs-body'
Vue.component('l-tabs-head', TabsHead)
Vue.component('l-tabs-item', TabsItem)
Vue.component('l-tabs-body', TabsBody)
Vue.component('l-tabs-pane', TabsPane)
Vue.component('l-tabs', Tabs)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('tabs-item', () => {
    const TabsItemConstructor = Vue.extend(TabsItem)
    it('tabs-item存在.', () => {
        expect(TabsItem).to.be.exist
    })
    describe('poops', function () {
        it('接受name', () => {
            const vm = new TabsItemConstructor({
                propsData: {
                    name: 'test'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('test')
        })
        it('接受disabled', () => {
            const vm = new TabsItemConstructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const callback = sinon.fake();
            vm.$on('click', callback)
            vm.$el.click()
            expect(vm.$el.classList.contains('disabled')).to.be.true
            expect(callback).to.have.not.been.called
        })
    })

})