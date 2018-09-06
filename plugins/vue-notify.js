import Vue from 'vue';
import Notify from 'vue-notifyjs';

import '../node_modules/vue-notifyjs/themes/default.css'

Vue.use(Notify,{
    type: 'success',
    timeout: 2000,
    verticalAlign: 'bottom',
    horizontalAlign: 'center',
    showClose: false
});