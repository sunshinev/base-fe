
import Vue from 'vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/en-US';
Vue.use(ViewUI, { locale });

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import httpVueLoader from "http-vue-loader"
Vue.use(httpVueLoader)

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios)

import App from './App.vue'

Vue.config.productionTip = false

const router = new VueRouter({
	routes:[]
})

new Vue({
	router:router,
	render: h => h(App),
}).$mount('#app')

axios.interceptors.request.use(function(config) {
     // Vue.prototype.$Spin.show();
     Vue.prototype.$Message.loading('loading');
    return config
})

axios.interceptors.response.use(
	response=>{
		Vue.prototype.$Spin.hide();
		Vue.prototype.$Message.success('load success');
	    return response
	},
	error=>{
		Vue.prototype.$Spin.hide();
		Vue.prototype.$Message.error(error.message);
	}
)
