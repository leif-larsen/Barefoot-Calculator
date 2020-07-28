<template>
    <b-row>
        <b-card-group deck 
            v-for="config in $store.getters.bucketConfig"
            v-bind:key="config.name">
            <bucket :bucketConfig="config" />
        </b-card-group>
    </b-row>
</template>

<script>
import Bucket from './Bucket.vue' 

export default {
    props: {
        income: Number
    },
    components: {
        Bucket
    }    
}
</script>

<style scoped>

</style>