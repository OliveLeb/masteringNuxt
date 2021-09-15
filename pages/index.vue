<template>
    <div style="display:flex">
        <div v-for="home in homes" :key="home.objectID" style="margin:10px;">
            <nuxt-link :to="`/home/${home.objectID}`" prefetch><HomeCard :home="home"/></nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Homepage',
            meta: [{
                name: 'description',
                content: 'This is a homepage!',
                hid: 'description'
            }]
        }
    },
    async asyncData({ $dataApi }) {
        return {
            homes: (await $dataApi.getHomes()).json.hits
        }
    }
}
</script>

<style>
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
</style>