import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import moment from 'moment'; //日期格式化
import MintUi from 'mint-ui';
import '../node_modules/mavon-editor/dist/css/index.css';
import mavonEditor from 'mavon-editor';

import 'mint-ui/lib/style.css';
import './static/css/base.css';
import './static/css/style.css';

import App from './components/app.vue';

/*
* 路由懒加载
* 把组件按组分块
* 有时候我们想把某个路由下的所有组件都打包在同个异步 chunk 中。只需要 给 chunk 命名，提供 require.ensure 第三个参数作为 chunk 的名称:
* Webpack 将相同 chunk 下的所有异步模块打包到一个异步块里面 —— 这也意味着我们无须明确列出 require.ensure 的依赖（传空数组就行）。
* */
const Home = resolve => require.ensure([], () => resolve(require('./components/Home/home.vue')), 'Home');
const TopicDetail = resolve => require.ensure([], () => resolve(require('./components/Detail/topicDetail.vue')), 'Detail');
const AuthorDetail = resolve => require.ensure([], () => resolve(require('./components/User/authorDetail.vue')), 'User');
const Messages = resolve => require.ensure([], () => resolve(require('./components/User/messages.vue')), 'User');
const Collections = resolve => require.ensure([], () => resolve(require('./components/User/collections.vue')), 'User');
const Edit = resolve => require.ensure([], () => resolve(require('./components/public/edit.vue')), 'Public');

let router = new VueRouter();
router.addRoutes([
	{name:'default',path:'/',redirect:'/home'},
	{name:'home',path:'/home/:id?',component:Home},
	{name:'topicDetail',path:'/topic/topicDetail/:id?',component:TopicDetail},
	{name:'user',path:'/user/:name?',component:AuthorDetail},
	{name:'userMessages',path:'/user/:name?/messages',component:Messages},
	{name:'collections',path:'/user/:name?/collections',component:Collections},
	{name:'edit',path:'/topic/edit/:id?',component:Edit},
])

//全局过滤器
Vue.filter('timeFormat', function (add_time) { //{{add_time | dateFormat}}
	return moment(add_time).format('YYYY-MM-DD hh:mm:ss');
});
Vue.filter('dateFormat', function (add_time) { //{{add_time | dateFormat}}
	return moment(add_time).format('YYYY-MM-DD');
});
Vue.filter('toDay',time=>{
	if(time > 2592000000){
		return Number.parseInt(time/(1000*3600*24*30))+'个月前';
	}
	if(time < 2592000000 && time >= 86400000){
		return Number.parseInt(time/(1000*3600*24))+'天前';
	}
	if(time < 86400000 && time >= 3600000){
		return Number.parseInt(time/(1000*3600))+'个小时前';
	}
	if(time < 3600000){
		return Math.ceil(time/(1000*60))+'分钟前';
	}
})//通过传入的毫秒值，计算出时多少天以前

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

//插件安装
//无限滚动加载
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(mavonEditor)

Vue.prototype.$http = axios;

let store = new Vuex.Store({
	state:{
		myInfo:{},
	},
	mutations:{
		updateMyInfo(state,obj){
			state.myInfo = obj;
		}
	},
	actions:{
		updateMyInfoByAct({commit},obj){
			commit('updateMyInfo',obj);
		}
	},
	getters:{
		getMyInfo(state){
			return state.myInfo;
		}
	}
})

let vm = new Vue({
	el:'#app',
	router,
	store,
	render: c => c(App)
})