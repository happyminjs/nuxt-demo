<template>
    <div  class="container">
		<p>是的，我就是user啊</p>
		<h1>{{title}}</h1>
		<p>是的，我就是后来的{{afterData}}</p>
		<toast-dom></toast-dom>
	</div>
</template>
<script>
import axios from 'axios';
import toastDom from '~/plugins/toast.vue'
export default {
	async asyncData ({ params }) {
		let { data } = await axios.get('https://wxk-hotwords.daweixinke.com/hotwords?platform=cct_h5');
		return { title: data.errorMessage }
	},
	data () {
		return {
			title: '',
			afterData:''
		}
	},
	methods: {
		afterGet:function(){
			axios.get('https://wxk-hotwords.daweixinke.com/hotwords?platform=cct_h5').then(res => {
				let tempData = res.data.values[0].key;
				this.afterData = tempData;
			})
		}
	},
	mounted () {
		this.afterGet();
	},
	head() {
		// 个性化设置head
		return {
			title: this.title, // 页面title
			meta: [
				{
					hid: "description",
					name: "description",
					content: "My custom description"
				}
			]
		};
	},
	components: {
		toastDom
	}
};
</script>
<style>

</style>

