import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/packages/theme-chalk/lib/index.css'
import {
    Button, Card, Form, FormItem, Input, Select, Option, Notification
} from 'element-ui'

const element = [Button, Card, Form, FormItem, Input, Select, Option]
locale.use(lang)
Vue.prototype.$notify = Notification
element.forEach(el => {
    Vue.use(el, {locale})
})