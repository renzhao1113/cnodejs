<template>
	<div class="topic-detail">
		<div class="topic-detail-title">
			<span v-text="data.title"></span>
			<button @click="collect" class="collect fr" v-if="!collected">收藏</button>
			<button @click="cancelCollect" class="cancel-collect fr" v-else="collected">取消收藏</button>
			<div class="edit-del" v-if="data.author_id == '59410c7e8ce045ee166a1534'">
				<router-link class="edit" :to="{name:'edit',params:{id:data.id}}">编辑</router-link>
				<router-link class="del" :to="{}">删除</router-link>
			</div>
			<div>作者 : <router-link :to="{name:'user',params:{name:data.author.loginname},query:{id:data.author_id}}">{{data.author.loginname}}</router-link></div>
			<div>创建时间 : {{data.create_at | timeFormat}}</div>
			<div>最近回复 : {{data.last_reply_at | timeFormat}}</div>
		</div>
		<div v-html="data.content"></div>
		<!--用户对此话题的回复-->
		<div class="replies">
			<div class="replies-amount">{{data.reply_count}}回复</div>

			<div  v-for="(item,index) of data.replies" :reply-id="item.id" :id="item.id" :reply-to-id="item.reply_id" :key="index">
				<div class="replies-author-info">
					<router-link  class="touxiang fl" :to="{name:'user',params:{name:item.author.loginname}}">
						<img class="" :src="item.author.avatar_url" alt="">
					</router-link>
					<span class="fr zan" @click="dianZan(item.id)">赞{{item.ups.length}}</span>
					<span class="fr replay-comment" @click="replayComment(index)">回复</span>
					<div>
						<span>{{item.author.loginname}}</span><br>
						<a href="javascript:;">{{index+1}}楼 · {{new Date().getTime()-new Date(item.create_at).getTime() | toDay}}</a>
						<br>
					</div>
				</div>
				<div class="replies-content" v-html="item.content"></div>
				<comment v-if="show() == index"
							:reply_id="item.id"
							:topic_id="data.id"
							:reply_to_name="item.author.loginname"
							:toChild="toChild"
							:access="access">
				</comment>
			</div>
		</div>
		<!--评论话题-->
		<comment :topic_id="data.id" :toChild="toChild" :access="access"></comment>
	</div>
</template>
<script>
	import comment from '../public/comment.vue';
	export default {
		data(){
			return {
				data:{},
				collected:false,
				zan:0,
				replyIndex:-1,
			}
		},
		methods:{
			collect(){
				this.$http.post(this.toChild+"/topic_collect/collect",{
					accesstoken:this.access,
					topic_id:this.data.id
				})
					.then(res=>{
						if(res.data.success){
							this.collected = true;
						}
					})
					.catch(err=>{
						alert(err)
					})
			},
			cancelCollect(){
				this.$http.post(this.toChild+"/topic_collect/de_collect",{
					accesstoken:this.access,
					topic_id:this.data.id
				})
					.then(res=>{
						if(res.data.success){
							this.collected = false;
						}
					})
					.catch(err=>{
						alert(err)
					})
			},
			//此方法返回评论的下标，如果下标对应点击的回复按钮所在的评论
			show(){
				return this.replyIndex;
			},
			//点赞
			dianZan(replyId){
				this.$http.post(this.toChild+"/reply/"+replyId+"/ups",{
					accesstoken: this.access,
				})
				.then(res=>{
					this.getTopics();
				})
				.catch(err=>{
					alert('不能点赞')
				})
			},
			//回复评论
			replayComment(index,replyId){
				this.replyIndex = index;
			},
			//获取话题详情
			getTopics(){
				this.$http.get(this.toChild+'/topic/'+this.$route.params.id+"?accesstoken="+this.access)
					.then(res => {
						this.loading=false;
						this.data = res.data.data;
						this.collected = this.data.is_collect;
					})
					.catch(err=>{
						console.log(err);
					});
			},
		},
		created(){
			this.getTopics();
			//评论成功之后更新列表
			this.$on("commentSuccess",data=>{
				this.data = data;
				this.replyIndex = -1;
			});
		},
		computed:{
		},
		props:["toChild","access"],
		components:{
			comment
		}
	}
</script>
<style>

</style>
