import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    income: 50000
  },
  mutations: {
    changeIncome(state, newIncome) {
      state.income = newIncome
    }
  },
  actions: {
  },
  getters: {
    income: state => state.income,
    bucketConfig: state => [{
        "name": "Daily",
        "amount": state.income * 0.6
      },{
        "name": "Splurge",
        "amount": state.income * 0.1
      },{
        "name": "Smile",
        "amount": state.income * 0.1
      },{
        "name": "Fire Extinguisher",
        "amount": state.income * 0.2
      }
    ]
  },
  modules: {
  }
})
