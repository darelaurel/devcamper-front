import Vue from 'vue'

import VueToast from 'vue-toast-notification';

import i18n from './i18n'

import router from './router'

import api from './services/index';

import store from './store/index';

import components from '@/plugins/ui/index'

import loader from '@/plugins/api-loader/index'

import App from './App';

import './assets/styles/style.scss'

import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(components);

Vue.use(loader, {
	dark: false,
	//locale: 'en', 
	loading: false, 
	background: 'rgb(255,255,255)'
  });

Vue.use(VueToast);

Vue.config.productionTip = false

api.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
		Vue.$toast.open({
			message: 'Syntax invalide, please enter correct data before make actions',
			type: 'warning'
		});
		break;

		case 401:
		Vue.$toast.open({
			message: 'Session expired',
			type: 'error'
		});
		break;       
		
		case 403:
		Vue.$toast.open({
			message: 'Unauthorized',
			type: 'error'
		});
		router.replace({
			path: "/login",
			query: { redirect: router.currentRoute.fullPath }
		});           
        break;

		case 404:
		Vue.$toast.open({
			message: 'Page doesn\'t exists',
			type: 'warning'
		});
		break; 
		
		case 429:
		Vue.$toast.open({
			message: 'Too many requests, try in 1hour',
			type: 'warning'
		});
		break; 
		
		case 502:
		Vue.$toast.open({
			message: 'Please login before',
			type: 'warning'
		});
		setTimeout(() => {
			router.replace({
			path: "/login",
			query: {
				redirect: router.currentRoute.fullPath
			}
			});
		}, 1000);      
      }
      return Promise.reject(error.response);
    }
  }
);

Vue.prototype.$http = api;

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
  destroyed:function(){
	Vue.$toast.clear();
  }
}).$mount('#app')
