import Vue from 'vue'
import VueRouter from 'vue-router'
import VirusesView from '../views/VirusesView.vue'

// parent
import ShopView from '../views/ShopView.vue'

// enfant
import ShopHome from '../views/ShopHome.vue'
import ShopLogin from '../views/ShopLogin.vue'
import ShopBuy from '../views/ShopBuy.vue'
import ShopPay from '../views/ShopPay.vue'
import ShopOrders from '../views/ShopOrders.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/shop/items',
    name: 'shopitems',
    component: VirusesView
  },
  {
    path: '/shop/login',
    name: 'shoplogin',
    // import dynamique du composant, plutôt qu'en début de fichier, comme la route prédécente.
    component: () => import('../views/ShopLoginView.vue')
  },
  {
    path: '/bank/account',
    name: 'bankaccount',
    // import dynamique du composant, plutôt qu'en début de fichier, comme la route prédécente.
    component: () => import('../views/BankAccountView.vue')
  },

  // ============================================
  // Route parent /shop
  // ============================================
  {
    path: '/shop',
    name: 'Shop',
    component: ShopView,
    // route enfants
    children: [
      {
        // /shop/home => ShopHome.vue
        // alias "/shop" pour que /shop redirige vers /shop/home
        path: 'home',
        name: 'ShopHome',
        components: {
          shopmain: ShopHome
        },
        alias: ''
      },
      {
        // /shop/login => ShopLogin.vue
        path: 'login',
        name: 'ShopLogin',
        components: {
          shopmain: ShopLogin
        }
      },
      {
        // /shop/buy => ShopBuy.vue
        path: 'buy',
        name: 'ShopBuy',
        components: {
          shopmain: ShopBuy
        }
      },
      {
        // /shop/pay/:orderId => ShopPay.vue
        path: 'pay/:orderId',
        name: 'ShopPay',
        components: {
          shopmain: ShopPay
        },
        // Le param "orderId" devient une prop dans ShopPay
        props: {
          shopmain: true
        }
      },
      {
        // /shop/orders => ShopOrders.vue
        path: 'orders',
        name: 'ShopOrders',
        components: {
          shopmain: ShopOrders
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
