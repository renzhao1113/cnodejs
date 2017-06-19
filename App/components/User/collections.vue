<template>
	<div class="home-content">
		<div class="crumbs">
			<router-link :to="{name:'home'}">主页 / </router-link>
			<span>{{$route.params.name}} 的收藏列表</span>
		</div>
		<ul class="home-content-ul">
			<li class="home-content-list" v-for="item of titleList">
				<router-link  class="touxiang" :to="{name:'user',params:{name:item.author.loginname}}"><img :src="item.author.avatar_url" alt=""></router-link>
				<div :class="{'list-title':true, top: item.top, ask: item.tab=='ask', share:item.tab=='share', good:item.good, job:item.tab=='job'}" >
					<router-link :to="{name:'topicDetail',params:{id:item.id}}"><h1>{{item.title}}</h1></router-link>
					<span>{{item.reply_count}}/{{item.visit_count}}</span><br>
					<span>最新回复：{{item.last_reply_at | dateFormat}}</span>
				</div>
			</li>
		</ul>
		<!--<div class="loading" v-show="loading">
			<loading color="#47b1ff" :type="1"></loading>
			<em>加载中.......</em>
		</div>-->
	</div>
</template>
<script>
	import { Spinner } from 'mint-ui';
	export default {
		data(){
			return {
				baseUrl: this.toChild,
				titleList:[],
			}
		},
		props:['toChild'],
		components:{
			'loading':Spinner,
		},
		created(){
			this.$http.get(this.toChild+'/topic_collect/'+this.$route.params.name)
				.then(res=>{
					this.titleList = res.data.data;
					console.log(this.titleList);
				})
				.catch(err=>{
					alert(err);
				})
		}
	}
</script>
<style>

</style>
