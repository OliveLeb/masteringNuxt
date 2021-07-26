<template>
    <div class="app-background-grey">
        <div class="app-wrapper app-padded-vertical">
            <div class="app-host-header">
                <div><img :src="user.image"></div>
                <div>
                    <div class="app-host-name">{{ user.name }}</div>
                    <div class="app-host-date">Joined in {{ shortDate(user.joined) }}</div>
                    <div class="app-flex">
                        <div class="app-host-reviews">
                            {{ pluralize(user.reviewCount, 'review') }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="app-host-description">
                {{ user.description }}
            </div>
        </div>
    </div>
</template>

<script>
import shortDate from '~/utils/shortDate'
import pluralize from '~/utils/pluralize'

export default {
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    methods: {
        shortDate,
        pluralize
    }
}
</script>