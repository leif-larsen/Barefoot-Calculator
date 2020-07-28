<template>
    <b-card header-tag="Header">
        <template v-slot:header>
            <h6 class="mb-0">{{ bucketConfig.name }}</h6>
        </template> 
        <b-card-text>{{ bucketConfig.amount }} NOK</b-card-text>
    </b-card>
</template>

<script>
export default {
    props: {
        bucketConfig: Object
    }
}
</script>