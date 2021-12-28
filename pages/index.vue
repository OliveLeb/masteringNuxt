<template>
    <div class="app">
    <div class="app-container">
      <div class="app-hero">
        <h2>
          - Settle in somewhere new. Discover stays to live, work, or just relax.
        </h2>
      </div>
    </div>
    <SectionPremiumListings />
    <SectionRecentlyAdded class="app-background-grey" :homes="homes" />
    <SectionMore />
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Homepage',
            meta: [{
                name: 'description',
                content: 'NuxtBNB is an AirBNB app that uses Nuxt, Cloudinary, Stripe, Google Maps and Algolia.',
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