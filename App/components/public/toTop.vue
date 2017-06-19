<template>
	<div class="to-top" @click="topTop">
		▲
	</div>
</template>
<script>
	export default {
		data(){
			return {}
		},
		methods:{
			topTop(){
				let timer = setInterval(function () {
					let top = window.scrollY;
					let t = top / 20;
					top -= t;
					if(top <= 0){
						clearInterval(timer);
						window.scrollTo(0,0);
						return;
					}
					window.scrollTo(0,top);
				},10)
			}
		}
	}
</script>
<style>

</style>
