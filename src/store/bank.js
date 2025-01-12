import BankAccountService from '../services/bankaccount.service'

export default {
    namespaced: true,

    // state = données "banque"
    state: () => ({
        accountAmount: 0,
        accountTransactions: [],
        accountNumberError: 0
    }),

    // mutations = fonctions synchrones pour modifier le state
    mutations: {
        updateAccountAmount(state, amount) {
            state.accountAmount = amount
        },
        updateAccountTransactions(state, transactions) {
            state.accountTransactions = transactions
        },
        updateAccountNumberError(state, error) {
            state.accountNumberError = error
        }
    },

    // actions = fonctions asynchrones pour commit des mutations
    actions: {
        async getAccountAmount({ commit }, number) {
            console.log('get account amount')
            let response = await BankAccountService.getAccountAmount(number)
            if (response.error === 0) {
                commit('updateAccountAmount', response.data)
                commit('updateAccountNumberError', 1)
            } else {
                console.log(response.data)
                commit('updateAccountNumberError', -1)
            }
        },
        async getAccountTransactions({ commit }, number) {
            console.log('get account transactions')
            let response = await BankAccountService.getAccountTransactions(number)
            if (response.error === 0) {
                commit('updateAccountTransactions', response.data)
                commit('updateAccountNumberError', 1)
            } else {
                console.log(response.data)
                commit('updateAccountNumberError', -1)
            }
        }
    }
}

