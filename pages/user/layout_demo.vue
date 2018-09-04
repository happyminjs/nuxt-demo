<template>
    <div class="content">
        <p>Hi,I am from another layout, his name is layout_one.</p>
        <nuxt-link to="/">Home page</nuxt-link>
        <p>This is from {{name}}</p>
    </div>
</template>

<script>
export default {
    layout: "layout_one",
    asyncData({req}){
        return {
            name : req ? 'server' : 'client'
        }
    }
}
</script>