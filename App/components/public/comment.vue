<template>
	<div>
		<mavon-editor v-model="content" :toolbars="toolbars" @change="changeText"/>
		<button class="release-btn" @click="huifu">回复</button>
	</div>
</template>
<script>
	import { Spinner } from 'mint-ui';
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
				//点击回复按钮，立即调用回复接口
				this.$http.post(this.toChild+"/topic/"+this.topic_id+"/replies",{
					accesstoken:this.access,
					content:this.content,
					reply_id: this.reply_id || '',
				})
					.then(res=>{
						//如果回复成功，重新获取话题详情，并将获取到的数据发送给父组件，最后，清空文本框
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
		components:['Spinner'],
		props:["toChild",'access','reply_id','topic_id','reply_to_name'],
		created(){
			//组件创建是，判断是否由父组件传来了reply_id
			//如果有，说明当前回复的是一条评论，而非话题，就将文本框内填充上@****的文本内容，并添加相应用户的路由
			if(this.reply_id){
				this.content = "[@"+this.reply_to_name+"](#/user/"+this.reply_to_name+")";
			}
		}
	}
</script>
<style scoped>

</style>
