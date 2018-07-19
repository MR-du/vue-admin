import Vue from 'vue'
import vueI18n from 'vue-i18n'
import en from './en'
import zh from './zh'
import elEn from'element-ui/lib/locale/lang/en'
import elZh from'element-ui/lib/locale/lang/zh-CN'
Vue.use(vueI18n)


	const messages = {
		cn: {
			...elZh,
			...zh
		},
		en: {
			...elEn,
			...en
		}
	}
	const i18n = new vueI18n({
		locale: 'cn', // 语言标识
		messages
	})
	export default i18n
