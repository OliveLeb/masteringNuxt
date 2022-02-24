<template>
    <div>
            <nuxt-img :src="'mastering-nuxt/'+home.images[0]" width="200" height="150" provider="cloudinary" /><br/>
            <p>{{ home.title }}</p>
            <p> {{home.location.address}} {{home.location.city}} {{home.location.state}} </p>
            <p> {{ home.guests}} guests </p>
            <p> {{ home.pricePerNight}} €/ night </p>
    </div>
</template>

<script>
export default {
    props: {
        home: {
            type: Object,
            required: true
        }
    }
}
</script>