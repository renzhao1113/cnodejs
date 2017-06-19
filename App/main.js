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
import Home from './components/Home/home.vue';
import TopicDetail from './components/Detail/topicDetail.vue';
import AuthorDetail from './components/User/authorDetail.vue';
import Messages from './components/User/messages.vue';
// import UserCenter from './components/User/userCenter.vue';
import Edit from './components/public/edit.vue';
import Collections from './components/User/collections.vue';

let router = new VueRouter();
router.addRoutes([
	{name:'default',path:'/',redirect:'/home'},
	{name:'home',path:'/home/:id?',component:Home},
	{name:'topicDetail',path:'/topic/topicDetail/:id?',component:TopicDetail},
	{name:'user',path:'/user/:name?',component:AuthorDetail},
	{name:'userMessages',path:'/user/:name?/messages',component:Messages},
	{name:'collections',path:'/user/:name?/collections',component:Collections},
	// {name:'userCenter',path:'/usercenter',component:UserCenter},
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