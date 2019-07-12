import Vue from 'vue'
import App from './App'
import './static/style/common.css' 
import './static/style/iconfont.css' 
import  "@dcloudio/uni-ui"
Vue.config.productionTip = false
Vue.prototype.$api = 'http://java.gzbigbang.cn/'
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
