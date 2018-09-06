<template>
    <div class="container">
        <div>没错，我是one</div>
        <h2>路由params参数： {{paramssss}}</h2>
        <toast-dom></toast-dom>

        <p>vue-notifyjs demo</p>
        <button @click="showNotify">点我展示vue-notify</button>
        <notifications></notifications>
    </div>
</template>
<script>
import axios from 'axios';
import toastDom from '~/plugins/toast.vue'
import vueNotify from '~/plugins/vue-notify.js'

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
		toastDom,vueNotify
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

