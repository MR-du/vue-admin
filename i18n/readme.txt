这个主题项目是vue-i18n:
请记住一下几点：1：cnpm install --save-dev vue-i18n
		2: 在main.js中import vueI18n from './lang’,Vue.use(vueI18n) ，然后在vue实例下添加VueI18n , 与vuex安装相同。
		3：在src目录下创建lang文件夹里边一个主js文件index.js ， 然后创建其他语言js,像zh.js里边放的export default一个对象，也可以说是一个json
		4: 在组件中赋值使用时用{{$t('message.状态')}}。
如果控住台报出 _t is not defined。没办法重新整一遍吧，我第一个项目就是毁在这上边，查了许久没找到答案。