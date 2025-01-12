import ShopService from '../services/shop.service'


export default {
    namespaced: true,

    // state = données "boutique"
    state: () => ({
        viruses: [],
        shopUser: null
    }),

    // mutations = fonctions synchrones pour modifier le state
    mutations: {
        updateViruses(state, viruses) {
            state.viruses = viruses
        },
        updateShopUser(state, user) {
            state.shopUser = user
        }
    },

    // actions = fonctions asynchrones pour commit des mutations
    actions: {
        async shopLogin({ commit }, { login, password }) {
            console.log('login')
            let response = await ShopService.shopLogin({ login, password })
            if (response.error === 0) {
                commit('updateShopUser', response.data)
            } else {
                console.log(response.data)
            }

            return response
        },
        async getAllViruses({ commit }) {
            console.log('récupération des viruses')
            let response = await ShopService.getAllViruses()
            if (response.error === 0) {
                commit('updateViruses', response.data)
            } else {
                console.log(response.data)
            }
        }
    }
}
