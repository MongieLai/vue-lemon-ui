# LemonUI -- 一个基于Vue实现的 UI 组件

## 作者：Mongie Lee

[![Build Status](https://www.travis-ci.org/MongieLai/zaolunzi.svg?branch=master)](https://www.travis-ci.org/MongieLai/zaolunzi)

这是我在学习Vue过程中做的一个UI框架，希望对你有用。

## 框架详细介绍[文档](https://mongielee.gitee.io/lemon-ui-docs/#/development/recommend)

## 使用本框架前，请在css中开启border-box
``` 
*,
*::before,
*::after {
	box-sizing: border-box;
}
```

## 安装
``` 
npm i vue-lemon-ui -S
```

## 引入LemonUI
### 样式文件需要单独引入
``` 
import Vue from 'vue'
import LemonUI from 'vue-lemon-ui';
import 'vue-lemon-ui/dist/index.css'
import App from './App.vue';

Vue.use(LemonUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
至此，一个基于 Vue 和 LemonUI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的[文档](https://mongielee.gitee.io/lemon-ui-docs/#/development/recommend)。

## 联系方式
邮箱：le30n@outlook.com