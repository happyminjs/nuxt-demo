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
	min-height: 100%;
}
.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}
.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}
.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}
.button--grey:hover {
  	color: #fff;
  	background-color: #35495e;
}
</style>

