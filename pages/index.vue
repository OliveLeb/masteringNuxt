<template>
    <div style="display:flex">
        <div v-for="home in homes" :key="home.objectID" style="margin:10px;">
            <HomeCard :home="home"/>
        </div>
    </div>
</template>

<script>
import homes from '~/data/homes'
import HomeCard from '~/components/HomeCard'

export default {
    components: {
            HomeCard,
        },
    data() {
        return {
            homes :homes.slice(0,3)
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