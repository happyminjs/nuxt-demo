<template>
    <div class="toast_box">
        {{toasttext}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            toasttext:'自定义的toast插件'
        }
    }
}
</script>

<style>
.toast_box{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 0 auto;
    z-index: 999;
    background: rgba(0, 0, 0, 0.6);
    padding: 8px 10px;
    line-height: 12px;
    text-align: center;
    border-radius: 4px;
    color: #ffffff;
    font-size: 14px;
}
</style>

