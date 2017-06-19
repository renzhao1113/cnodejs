<template>
	<div>
		<mavon-editor v-model="content" :toolbars="toolbars" @change="changeText"/>
		<button class="release-btn" @click="huifu">回复</button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				toolbars: {
					bold: true, // 粗体
					italic: true, // 斜体
					header: false, // 标题
					underline: false, // 下划线
					strikethrough: false, // 中划线
					mark: false, // 标记
					superscript: false, // 上角标
					subscript: false, // 下角标
					quote: false, // 引用
					ol: true, // 有序列表
					ul: true, // 无序列表
					link: true, // 链接
					imagelink: false, // 图片链接
					code: false, // code
					table: false, // 表格
					subfield: false, // 是否需要分栏
					fullscreen: false, // 全屏编辑
					readmodel: false, // 沉浸式阅读
					htmlcode: false, // 展示html源码
					help: false, // 帮助
					/* 1.3.5 */
					undo: false, // 上一步
					redo: false, // 下一步
					trash: true, // 清空
					save: false, // 保存（触发events中的save事件）
					/* 1.4.2 */
					navigation: false // 导航目录
				},
				content:'',
				data:{},
			}
		},
		methods:{
			huifu(){
//				console.log("作者的id",this.$store.getters.getMyInfo.id);
//				console.log("话题id",this.topic_id);
				this.$http.post(this.toChild+"/topic/"+this.topic_id+"/replies",{
					accesstoken:this.access,
					content:this.content,
					reply_id: this.reply_id || '',
				})
					.then(res=>{
						if(res.data.success){
							this.getTopics(data=> {
								this.$parent.$emit('commentSuccess',data);
								this.content = "";
							});
						}
					})
					.catch(err=>{
						alert(err.data);
					})
			},
			changeText(val,render){
				this.content = render;
			},
			//获取话题详情
			getTopics(fn){
				this.$http.get(this.toChild+'/topic/'+this.topic_id+"?accesstoken="+this.access)
					.then(res => {
						this.data = res.data.data;
						fn(this.data);
					})
					.catch(err=>{
						console.log(err);
					});
			},
		},
		computed:{

		},
		props:["toChild",'access','reply_id','topic_id','reply_to_name'],
		created(){
			if(this.reply_id){
				this.content = "[@"+this.reply_to_name+"](#/user/"+this.reply_to_name+")";
			}
		}
	}
</script>
<style scoped>

</style>
