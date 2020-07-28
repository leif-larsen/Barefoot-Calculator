<template>
    <div>
        <b-form>
            <b-form-group
                id="fieldset-1"
                label="Number of people with income in your household"
                label-for="fieldset-1"
                label-cols-md>
                    <b-form-select 
                        v-model="selectedHouseHoldNumber"
                        size="sm"
                        class="mt-3" value="1"
                        @change="setPeopleInHousehold">
                        <b-form-select-option value="1">1</b-form-select-option>
                        <b-form-select-option value=2>2</b-form-select-option>
                        <b-form-select-option value=3>3</b-form-select-option>
                    </b-form-select>
            </b-form-group>
            
            <template>
                <div
                    v-for="nr in Number(peopleInHousehold)"
                    :key="nr">
                        <app-person-config :number="nr"></app-person-config>
                </div>
            </template>

            <b-button>Save</b-button>
        </b-form>
    </div>
</template>

<script>
import PersonConfig from './PersonConfig.vue'

export default {
    data: function() {
        return {
            selectedHouseholdNumber: "1",
            peopleInHousehold: 1
        }
    },
    components: {
        AppPersonConfig: PersonConfig
    },
    methods: {
        setPeopleInHousehold: function(event) {
            this.peopleInHousehold = event
        }
    }
}
</script>