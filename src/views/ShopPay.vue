<!-- ShopPay.vue -->
<template>
  <div>
    <h2>Page de paiement</h2>
    <p>Numéro de commande : {{ orderId }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShopPay',
  props: {
    orderId: {
      type: String,
      required: true
    }
  }
}
</script>
