<template>
    <div class="container">
		<p>是不是server渲染： {{thisServer}}</p>
		<p>路由parmars： {{paramssss}}</p>
		<p>客户端获取接口数据后渲染的：{{afterData}}</p>
		<toast-dom></toast-dom>
	</div>
</template>
<script>
import axios from 'axios';
import toastDom from '~/plugins/toast.vue'
export default {
	async asyncData ({isServer,params,query}) {
		let { data } = await axios.get('https://wxk-hotwords.daweixinke.com/hotwords?platform=cct_h5');
		let querydd = '';
		if(query.plan == 'hengheng'){
			querydd = query.plan;
		}else{
			querydd = '我不是';
		}
		return { 
			title: data.values[1].key,
			thisServer: isServer,
			paramssss: querydd
		}
	},
	data () {
		return {
			title: '',
			afterData:'',
			thisServer:'',
			paramssss:''
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

