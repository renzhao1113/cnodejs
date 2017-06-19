<template>
	<div class="home-main">
		<ul class="home-navs clearfix">
			<li class="home-nav"><router-link :to="{name:'home',params:{id:'all'}}" :class="{'nav-active':tab=='all'}">全部</router-link></li>
			<li class="home-nav"><router-link :to="{name:'home',params:{id:'good'}}" :class="{'nav-active':tab=='good'}">精华</router-link></li>
			<li class="home-nav"><router-link :to="{name:'home',params:{id:'share'}}" :class="{'nav-active':tab=='share'}">分享</router-link></li>
			<li class="home-nav"><router-link :to="{name:'home',params:{id:'ask'}}" :class="{'nav-active':tab=='ask'}">问答</router-link></li>
			<li class="home-nav"><router-link :to="{name:'home',params:{id:'job'}}" :class="{'nav-active':tab=='job'}">招聘</router-link></li>
			<li class="home-nav"><router-link :to="{name:'home',params:{id:'dev'}}" :class="{'nav-active':tab=='dev'}">测试</router-link></li>
		</ul>
		<div class="home-content">
			<ul class="home-content-ul"
				 v-infinite-scroll="loadMore"
				 infinite-scroll-disabled="loading"
				 infinite-scroll-distance="0">
				<li class="home-content-list" v-for="item of titleList">
					<router-link  class="touxiang" :to="{name:'user',params:{name:item.author.loginname}}"><img :src="item.author.avatar_url" alt=""></router-link>
					<div :class="{'list-title':true, top: item.top, ask: item.tab=='ask', share:item.tab=='share', good:item.good, job:item.tab=='job'}" >
						<router-link :to="{name:'topicDetail',params:{id:item.id}}"><h1>{{item.title}}</h1></router-link>
						<span>{{item.reply_count}}/{{item.visit_count}}</span><br>
						<span>最新回复：{{item.last_reply_at | dateFormat}}</span>
					</div>
				</li>
			</ul>
			<div class="loading" v-show="loading">
				<loading color="#47b1ff" :type="1"></loading>
				<em>加载中.......</em>
			</div>
		</div>
	</div>
</template>
<script>
	import { Spinner } from 'mint-ui';
	export default {
		data(){
			return {
				baseUrl: this.toChild,
				titleList:[],
				loading:false,
				page:0,
				tab:"",
			}
		},
		methods:{
			loadMore(){
				this.loading = true;
				this.page++;
				setTimeout(()=>{
					this.loadList({page:this.page,tab:this.tab},list=>{
						this.titleList = this.titleList.concat(list);
					});
				},1000)
			},
			loadList(config,fn){
				var page = config.page || 1;
				var tab = config.tab || '';
				this.$http.get('https://cnodejs.org/api/v1/topics?page='+page+"&tab="+tab)
					.then(res => {
						this.loading=false;
//						console.log(res);
						fn(res.data.data);
					})
					.catch(err=>{
						console.log(err);
					});
			},
		},
		created(){
			 this.tab = this.$route.params.id;
		},
		beforeRouteUpdate(to,from,next){
//			console.log('路由更新了');
			this.loading = true;
			this.tab = to.params.id || "";
			this.page = 1;
			this.titleList = [];
			next();
			this.loadList({page:this.page,tab:this.tab},res=>{
				this.titleList = this.titleList.concat(res);
				this.loading = false;
			})
		},
		props:['toChild'],
		components:{
			'loading':Spinner,
		}
	}
</script>
<style scoped>
	.home-main{
		margin-top: 20px;
		padding: 0 5px;
		background-color: #fff;
		background-clip: content-box;
		margin-bottom: 20px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.home-navs{
		margin: 10px auto;
		padding: 0 20px;
		background-color: #f6f6f6;
		background-clip: border-box;
	}
	.home-nav{
		float: left;
		width: 80px;
		text-align: left;
		height: 30px;
		line-height: 30px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.home-nav > a{
		font-size: 14px;
		color: #80bd01;
		padding: 0 10px;
	}
	.home-nav > a.nav-active{
		color: #fff;
		padding: 0 10px;
		background-color: yellowgreen;
	}
</style>
