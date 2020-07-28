<template>
    <b-card bg-variant="light" class="m-2">
        <p class="font-weight-bold pt-0">Income information for person #{{ number }}</p>

        <b-form-group
            class="mb-2">

                <b-form-group 
                    label-cols-sm="3"
                    label="Name"
                    label-align-sm="left"
                    label-for="nested-name">
                        <b-form-input id="nested-name"></b-form-input>
                </b-form-group>
                
                <b-form-group 
                    label-cols-sm="3"
                    label="Salary type"
                    label-align-sm="left"
                    label-for="nested-paycheck-variant">
                        <b-form-radio-group
                            id="nested-paycheck-variant"
                            v-model="selectedPayment"
                            name="nested-paycheck-variant">
                                <b-form-radio value="fixed">Fixed salary</b-form-radio>
                                <b-form-radio value="commission">Commissioned-based salary</b-form-radio>
                        </b-form-radio-group>
                </b-form-group>
                
                <b-form-group 
                    label-cols-sm="3"
                    label="Salary input"
                    label-align-sm="left"
                    label-for="nested-automatic-salary">
                        <b-form-checkbox
                            id="nested-automatic-salary"
                            v-model="something"
                            name="automatic-salary"
                            value="automatic_salary_input"
                            unchecked-value="manual_salary_input">
                                I wish to import my salary automatically
                        </b-form-checkbox>
                </b-form-group>
                
                <b-form-group 
                    label-cols-sm="3"
                    label="Monthly salary"
                    label-align-sm="left"
                    label-for="nested-salary">
                        <b-form-input id="nested-salary"></b-form-input>
                </b-form-group>

                <b-form-group 
                    label-cols-sm="3"
                    label="Notification"
                    label-align-sm="left"
                    label-for="nested-notification-selection">
                        <b-form-radio-group
                            id="nested-notification-selection"
                            v-model="selectedNotification"
                            name="nested-notification">
                                <b-form-radio value="sms">Text message</b-form-radio>
                                <b-form-radio value="email">E-mail</b-form-radio>
                        </b-form-radio-group>
                </b-form-group>
                
                <b-form-group 
                    label-cols-sm="3"
                    label="Notify me on"
                    label-align-sm="left"
                    label-for="nested-notify-address">
                        <b-form-input id="nested-notify-address"></b-form-input>
                </b-form-group>
                
                <b-form-group 
                    label-cols-sm="3"
                    label="Salary payment date"
                    label-align-sm="left"
                    label-for="nested-salary-payment-date">
                        <b-form-input id="nested-salary-payment-date"></b-form-input>
                </b-form-group>
        </b-form-group>
    </b-card>    
</template>

<script>
import BarefootService from '../../services/BarefootService'

export default {
    props: {
        number: Number
    },
    mounted: async function() {
        const response = await BarefootService.getBarefootData()
        console.log(response)
    }
}
</script>

<style scoped>

</style>