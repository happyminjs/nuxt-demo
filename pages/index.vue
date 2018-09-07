<template>
	<section class="container">
		<div id="main-box">
			<p>自定义组件引入的logo：</p>
			<app-logo/>
			<br>
			<h1 class="title">nuxt</h1>
			<div class="links">
				<router-link class="button--green" :to="{path:'/user',query:{plan:'hengheng'}}">带query路由</router-link>
				<router-link class="button--grey" :to="{name:'one',params:{userId:3243}}">params路由</router-link>
				<router-link class="button--green" :to="{path:'/user/layout_demo'}">去看自定义模板</router-link>
			</div>
		</div>
		<div class="fill-bottom"></div>
	</section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>

<style lang="scss">
.fill-bottom {
  height: 56px;
}
#main-box {
	position: relative;
	padding: 20px 10px;
	text-align: center;
	.title {
		font-family: $font-family;
		display: block;
		font-weight: 300;
		font-size: 50px;
		color: $font-color;
		letter-spacing: 1px;
	}
	.subtitle {
		font-weight: 300;
		font-size: 22px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}
	.links {
		padding-top: 15px;
		a{
			display: block;
			margin-bottom: 10px;
		}
		.button--green {
			border-radius: 4px;
			border: 1px solid #3b8070;
			color: #3b8070;
			text-decoration: none;
			padding: 10px 20px;
		}
		.button--green:hover {
			color: #fff;
			background-color: #3b8070;
		}
		.button--grey {
			border-radius: 4px;
			border: 1px solid #35495e;
			color: #35495e;
			text-decoration: none;
			padding: 10px 20px;
		}
		.button--grey:hover {
			color: #fff;
			background-color: #35495e;
		}
	}
}
</style>

