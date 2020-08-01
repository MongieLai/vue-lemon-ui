const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    const PopoverConstructor = Vue.extend(Popover)
    it('存在.', () => {
        expect(Popover).to.be.exist
    })
    it('popover组件接收position属性.', (done) => {
        Vue.component('l-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <l-popover position='bottom' ref='a'>
			<template slot='content' >
				<div>asdasdasdasdaskljdjaskljfklasjflkasjfklas</div>
				<button>点我关闭</button>
			</template>
			<button>点我</button>
		</l-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const { contentWrapper } = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })
    })
})