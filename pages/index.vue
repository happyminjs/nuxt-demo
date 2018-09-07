<template>
	<section class="container">
		<div id="main-box">
			<app-logo/>
			<h1 class="title">
				nuxt
			</h1>
			<h2 class="subtitle">
				Nuxt.js project
			</h2>
			<div class="links">
				<router-link class="button--green" :to="{path:'/user',query:{plan:'hengheng'}}">user</router-link>
				<router-link class="button--grey" :to="{name:'one',params:{userId:3243}}">one</router-link>
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
	}
}
</style>

