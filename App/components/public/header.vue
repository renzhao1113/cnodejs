<template>
	<div>
		<header>
			<img class="logo" src="/static/images/cnodejs_light.svg" alt="">
			<form action="">
				<input type="search" v-model="key" placeholder="search...">
			</form>
			<ul class="clearfix">
				<li><router-link :to="{name:'home'}">首页</router-link></li>
				<li><router-link :to="{name:'user',params:{name:getMyName}}">个人中心</router-link></li>
			</ul>
		</header>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				key:'',
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		},
		components:{
		},
		computed:{
			getMyName(){
				return this.$store.getters.getMyInfo.loginname;
			}
		},
	}
</script>
<style scoped>
	 header{
		 background-color: #444!important;
		 height: auto;
		 text-align: center;
		 padding: 10px 20px;
	 }
	 header .logo{
		 width: 120px;
	 }
	 header h1{
		 color: #fff;
		 font-size: .25rem!important;
		 font-weight: normal;
	 }
	 header span{
		 color: #fff;
		 font-size: .2rem!important;
		 font-weight: normal;
	 }
	input	{
		border: none;
		display: block;
		background-color: #888;
		height: 30px;
		width: 250px;
		margin: 4px auto;
		padding: 0 15px;
		border-radius: 15px;
	}
	header ul{
		max-width: 480px;
		margin: 10px auto;
	}
	header li{
		float: left;
		width: 80px;
		line-height: 30px;
		text-align: left;
	}
	 header li a{
		 color: #ccc;
		 font-size: 14px;
	 }
</style>
