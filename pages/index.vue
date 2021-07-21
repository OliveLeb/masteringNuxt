<template>
    <div style="display:flex">
        <div v-for="home in homes" :key="home.objectID" style="margin:10px;">
            <img :src="home.images[0]" style="width:200px"><br/>
            <p>{{ home.title }}</p>
            <p> {{home.location.address}} {{home.location.city}} {{home.location.state}} </p>
            <p> {{ home.guests}} guests </p>
            <p> {{ home.pricePerNight}} / nights </p>
        </div>
    </div>
</template>

<script>
import homes from '~/data/homes'

export default {
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