<template>
	<div>
		<div class="message">
			<ul class="new-message"  v-if="data.hasnot_read_messages.length > 0">
				<li>未读消息 <button class="mark-all" @click="markAll">标记全部为已读</button> </li>
				<li v-for="(mes,index) of data.hasnot_read_messages" :key="index">
					<button class="fr mark-one" @click="markOne(mes.id)">标记</button>
					<router-link :to="{name:'user', params:{name:mes.author.loginname}}" v-text="mes.author.loginname"></router-link>
					<span style="font-size: 12px;">回复了你的话题</span>
					<router-link class="topic-title" :to="{name:'topicDetail',params:{id:mes.topic.id}}" v-text="mes.topic.title"></router-link>
				</li>
			</ul>
			<ul class="new-message-no" v-else>
				<li>未读消息</li>
				<li style="text-align: center; line-height: 40px;">无消息</li>
			</ul>

			<ul class="old-message" v-if="data.has_read_messages.length > 0">
				<li>已读消息</li>
				<li v-for="(mes,index) of data.has_read_messages" :key="index">
					<router-link :to="{name:'user', params:{name:mes.author.loginname}}" v-text="mes.author.loginname"></router-link>
					<span style="font-size: 12px;">回复了你的话题</span>
					<router-link class="topic-title" :to="{name:'topicDetail',params:{id:mes.topic.id}}" v-text="mes.topic.title"></router-link>
				</li>
			</ul>
			<ul class="old-message" v-else>
				<li>已读消息</li>
				<li style="text-align: center; line-height: 40px;">无消息</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				data:{
					hasnot_read_messages:[],
					has_read_messages:[]
				},
			}
		},
		created(){
			this.getAllMessages();
		},
		methods:{
			getAllMessages(){
				this.$http.get(this.toChild+"/messages?accesstoken="+this.access)
					.then(res=>{
						console.log(res);
						this.data = res.data.data;
					})
					.catch(err=>{
						console.log(err);
					})
			},
			markAll(){
				this.$http.post(this.toChild+"/message/mark_all",{
					accesstoken:this.access,
				})
					.then(res=>{
//						console.log(res);
						if(res.data.success){
							alert('标记成功');
							this.getAllMessages();
						}
					})
					.catch(err=>{
						console.log(err);
					})
			},
			markOne(id){
				this.$http.post(this.toChild+"/message/mark_one/"+id,{
					accesstoken:this.access,
				})
					.then(res=>{
//						console.log(res);
						if(res.data.success){
							alert('标记成功');
							this.getAllMessages();
						}
					})
					.catch(err=>{
						console.log(err);
					})
			}
		},
		props:["toChild","access"],
	}
</script>
<style scoped>
	.message{
		padding: 10px 5px;
		background-color: #fff;
	}
	.message li:nth-of-type(1){
		line-height: 40px;
		background-color: #f6f6f6;
		text-align: center;
	}
	.message li,.new-message-no li{
		height: 50px;
		line-height: 20px;
		padding: 5px 0;
		border-bottom: 1px dotted #ccc;
	}
	.mark-all, .mark-one{
		background-color: #80bd01;
		padding: 2px 4px;
		border-radius: 4px;
		color: #fff;
		border: none;
	}
	.mark-all:active, .mark-one:active{
		background-color: #01bd3d;
	}


</style>
