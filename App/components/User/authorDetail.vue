<template>
	<div>
		<div class="author-detail">
			<div class="crumbs">
				<router-link :to="{name:'home'}">主页/</router-link>
				<span>{{$route.params.name}}</span>
			</div>
			<div class="author-base">
				<!--如果路由中的用户名是我本人的，就显示发布话题按钮-->
				<router-link v-if="$route.params.name == $store.getters.getMyInfo.loginname"
								 :to="{name:'edit'}"
								 class="fr release-btn">发布话题</router-link>

				<div class="author-face">
					<img :src="userInfo.avatar_url" alt="">
					<span>{{userInfo.loginname}}</span>
				</div>

				<div class="score">{{userInfo.score}}积分</div>

				<router-link :to="{name:'collections',params:{name:userInfo.loginname}}"
								 class="collect-count">{{collectCount}}个收藏</router-link>
				<div class="register">注册于 {{userInfo.create_at | dateFormat}}</div>

				<!--未读消息数-->
				<div v-if="$route.params.name == $store.getters.getMyInfo.loginname">
					<router-link :to="{name:'userMessages',params:{name:userInfo.loginname}}"
									 style="padding: 2px 4px; background: #80bd01; border-radius: 5px; color: #fff;">{{getMessagesCount()}}{{messageCount}}</router-link>
					<span style="font-size: 12px;">条消息未读</span>
				</div>

			</div>

			<div class="recent-create">
				<!--最近创建的话题开始-->
				<div v-if="userInfo.recent_topics.length != 0">
					<div class="recent-title">最近创建的话题</div>
					<div class="recent-create-content">
						<ul>
							<li v-for="(item,index) of userInfo.recent_topics" :key="index">
								<router-link  class="touxiang fl" :to="{name:'user',params:{name:item.author.loginname},query:{id:item.author_id}}"><img :src="item.author.avatar_url" alt=""></router-link>
								<div :class="{'list-title':true, top: item.top, ask: item.tab=='ask', share:item.tab=='share', good:item.good, job:item.tab=='job'}" >
									<router-link :to="{name:'topicDetail',params:{id:item.id}}">
										<h1>{{item.title}}</h1>
										<div>{{item.last_reply_at | timeFormat}}</div>
									</router-link>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!--最近创建的话题结束-->

				<!--最近参与的话题开始-->
				<div v-if="userInfo.recent_replies.length!=0">
					<div class="recent-title">最近参与的话题</div>
					<div class="recent-create-content">
						<ul>
							<li v-for="(item,index) of userInfo.recent_replies" :key="index">
								<router-link  class="touxiang fl" :to="{name:'user',params:{name:item.author.loginname},query:{id:item.author_id}}"><img :src="item.author.avatar_url" alt=""></router-link>
								<div :class="{'list-title':true, top: item.top, ask: item.tab=='ask', share:item.tab=='share', good:item.good, job:item.tab=='job'}" >
									<router-link :to="{name:'topicDetail',params:{id:item.id}}">
										<h1>{{item.title}}</h1>
										<div>{{item.last_reply_at | timeFormat}}</div>
									</router-link>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!--最近参与的话题结束-->
			</div>
		</div>
	</div>

</template>
<script>
	export default {
		data(){
			return {
				collectCount:0,
				messageCount:0,
				userInfo:{
					recent_replies:[],
					recent_topics:[],
				},
				userName:"",
			}
		},
		methods:{
			abc(){
				this.$http.get(this.toChild+"/user/"+this.userName)
					.then(result=>{
						this.userInfo = result.data.data;
						this.$http.get(this.toChild+"/topic_collect/"+this.$route.params.name)
							.then(res=>{
								this.collectCount = res.data.data.length;
								console.log("收藏了" + this.collectCount);
							})
							.catch(err=>{
								alert(err.data);
							});
					})
					.catch(err=>{
						alert(err.data);
					});

			},
			getMessagesCount(){
				this.$http.get(this.toChild+"/message/count"+"?accesstoken="+this.access)
					.then(res=>{
						this.messageCount = res.data.data;
						console.log(this.messageCount);
					})
					.catch(err=>{
						alert(err.data)
					})
			}
		},
		created(){
			this.userName = this.$route.params.name;
			this.abc();
		},
		beforeRouteUpdate(to,from,next){
			this.userName = to.params.name;
			this.abc();
			next();
		},
		props:['toChild','access']
	}
</script>
<style>

</style>
