import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-tw');
Vue.prototype.$moment = moment
