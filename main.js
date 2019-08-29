import Vue from 'vue'
import App from './App'
import './static/style/common.css' 
import './static/style/iconfont.css' 
import  "@dcloudio/uni-ui"
Vue.config.productionTip = false
Vue.prototype.$api = 'https://ybyf.gzbigbang.net/ybyfManager/' 
//Vue.prototype.$api = 'http://192.168.0.102:8080/'       
App.mpType = 'app'
Vue.mixin({
	  onLoad: function () {
		wx.hideShareMenu();
	  } 
})
const app = new Vue({ 
    ...App 
})     
app.$mount()         
            