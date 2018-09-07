// 默认布局，每个页面都自动加的布局
<template>
	<div class="main_box">
		<head-dom/>
    	<nuxt/>
		<foot-dom/>
  	</div>
</template>
<script>
	import HeadDom from "~/layouts/head.vue";
	import FootDom from "./foot.vue";
	export default {
		components: {
			HeadDom,FootDom
		}
	};
</script>


<style>
.main_box{
	height: 100%;
	position: relative;
	padding-top: 46px;
}
</style>

