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

describe('Tabs', () => {
    const TabsConstructor = Vue.extend(Tabs)
    it('tabs存在.', () => {
        expect(Tabs).to.be.exist
    })
    describe('poops', function () {
        it('接受selected', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <l-tabs selected='sports'>
                <l-tabs-head>
                    <l-tabs-item name='news' disabled>
                        新闻
                    </l-tabs-item>
                    <l-tabs-item name='sports'>体育</l-tabs-item>
                </l-tabs-head>
                <l-tabs-body>
                    <l-tabs-pane name='news'>习近平今天</l-tabs-pane>
                    <l-tabs-pane name='sports'>Nba</l-tabs-pane>
                </l-tabs-body>
		    </l-tabs>
            `
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(() => {
                let x = vm.$el.querySelector('.tabs-item[data-name="sports"]')
                expect(x.classList.contains('active')).to.be.true
                done()
            })
        })
    })

})