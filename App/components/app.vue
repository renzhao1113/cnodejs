<template>
	<div>
		<header-vue></header-vue>
		<router-view :to-child="baseUrl"
						 :access="'a503c52d-76a9-4fc4-a51b-f9cbf8e2c70f'">
		</router-view>
		<to-top></to-top>
	</div>
</template>
<script>
	import HeaderVue from './public/header.vue';
	import ToTop from "./public/toTop.vue";
	export default {
		data(){
			return {
				baseUrl:"https://cnodejs.org/api/v1",
			}
		},
		components:{
			HeaderVue,
			ToTop
		},
		created(){
			//我的个人信息
			this.$http.post(this.baseUrl+"/accesstoken",{
				accesstoken:"a503c52d-76a9-4fc4-a51b-f9cbf8e2c70f"
			})
				.then(res=>{
					let data = res.data;
					this.$store.dispatch("updateMyInfoByAct",data);
				})
				.catch(err=>{
					alert(err);
				})
		}

	}
</script>
<style>

</style>
