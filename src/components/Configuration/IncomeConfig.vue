<template>
    <b-row>
        <h2>
            Set income
        </h2>
        <input 
            @input="incomeChanged" 
            :value="$store.getters.income" 
            name="income" />
    </b-row>
</template>

<script>
export default {
    props: {
        income: Number
    },
    methods: {
        incomeChanged: function(event) {
            this.$store.commit('changeIncome', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>