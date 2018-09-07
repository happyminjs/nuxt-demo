<template>
    <div class="container">
        <p>路由params参数： {{paramssss}}</p>
        <h4>vue-notifyjs demo:</h4>
        <button @click="showNotify">点我在底部展示vue-notify</button>
        <notifications></notifications>
    </div>
</template>
<script>
import axios from 'axios';
import toastDom from '~/plugins/toast.vue'

export default {
    layouts:'demo_layout',
    async asyncData ({isServer,params,query}) {
		let { data } = await axios.get('https://wxk-hotwords.daweixinke.com/hotwords?platform=cct_h5');
		return { 
			title: data.values[1].key,
			thisServer: isServer,
			paramssss: params.userId
		}
    },
    components: {
        toastDom
	},
    data(){
        return {
            paramssss: ''
        }
    },
    methods: {
        addNotification(msg){
            this.$notify({
                message: msg
            })
        },
        showNotify(){
            this.addNotification('哈哈哈');
        }
    },
    mounted () {
        
    }
}
</script>

