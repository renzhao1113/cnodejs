<template>
	<div class="topic-create">
		<div class="crumbs">
			<router-link :to="{name:'home'}">主页</router-link>
			<span v-if="$route.params.id"> / 编辑话题</span>
			<span v-else> / 发布话题</span>
		</div>
		<div class="topic-create-content">
				选择板块:
				<select name="tab" id="select-tab" v-model="tab" @change="change">
					<option value="请选择" selected>请选择</option>
					<option value="share">分享</option>
					<option value="ask">问答</option>
					<option value="job">招聘</option>
					<option value="dev">测试</option>
				</select>
				<div v-show="tab != 'dev' || false" style="color: red; font-size: 12px;">必须选择dev模块</div>
				<label class="topic-title">
					标题：<input type="text" v-model="title" name="title" placeholder="10字以上" @keyup="change">
					<div v-show="title.length < 10" style="color: red; font-size: 12px;">必须10字以上</div>
				</label>
				<mavon-editor v-model="content" :toolbars="toolbars" @change="changeText"/>
				<input class="sub" type="button" value="提交" @click="submit" :disabled="disabled">
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				content:"",
				title:'',
				tab:'请选择',
				toolbars: {
					bold: true, // 粗体
					italic: true, // 斜体
					header: true, // 标题
					underline: true, // 下划线
					strikethrough: true, // 中划线
					mark: true, // 标记
					superscript: true, // 上角标
					subscript: true, // 下角标
					quote: true, // 引用
					ol: true, // 有序列表
					ul: true, // 无序列表
					link: true, // 链接
					imagelink: false, // 图片链接
					code: true, // code
					table: true, // 表格
					subfield: true, // 是否需要分栏
					fullscreen: true, // 全屏编辑
					readmodel: true, // 沉浸式阅读
					htmlcode: true, // 展示html源码
					help: true, // 帮助
					/* 1.3.5 */
					undo: true, // 上一步
					redo: true, // 下一步
					trash: true, // 清空
					save: false, // 保存（触发events中的save事件）
					/* 1.4.2 */
					navigation: true // 导航目录
				},
				disabled:true,
				id:"",
				file_img:{}
			}
		},
		props:["toChild","access"],
		methods:{
			change(){
				this.disabled = this.title.length < 10 || this.tab != 'dev';
			},
			submit(){
				if(!this.id){
					this.$http.post(this.toChild+"/topics",{
						accesstoken: this.access,
						title:this.title,
						tab:this.tab,
						content:this.content
					})
						.then(res=>{
							if(res.data.success){
								alert('发帖成功');
								this.$router.push({
									path:'/user/'+this.$store.getters.getMyInfo.loginname
								})
							}
						})
						.catch(err=>{
							alert(err.data);
						})
				}else{
					this.$http.post(this.toChild+"/topics/update",{
						accesstoken: this.access,
						title:this.title,
						tab:this.tab,
						content:this.content,
						topic_id:this.id,
					})
						.then(res=>{
							if(res.data.success){
								alert('发帖成功');
								//发帖成功后调回个人中心
								this.$router.push({
									path:'/user/'+this.$store.getters.getMyInfo.loginname
								})
							}
						})
						.catch(err=>{
							alert(err.data);
						})
				}
			},
			changeText(value,render){
				this.content = render;
			},
		},
		created(){
			this.id = this.$route.params.id
			if(this.id){
				this.$http.get(this.toChild+"/topic/"+this.id+"?mdrender=false")
					.then(res=>{
						let data = res.data.data;
						this.content = data.content;
						this.title = data.title;
						this.tab = data.tab;
						this.disabled = this.title.length < 10 || this.tab != 'dev';
					})
					.catch(err=>{
						console.log(err);
					})
			}
			this.disabled = this.title.length < 10 || this.tab != 'dev';
		}
	}
</script>
<style>

</style>
