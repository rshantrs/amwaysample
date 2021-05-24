<template>
  <b-container fluid>
    <b-row>
      <b-col>Current user: {{ sharedState.currentMember.name }}</b-col>
    </b-row>
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="User" active>
          <b-card-text>
            <member></member>
          </b-card-text>
        </b-tab>
        <b-tab title="Products" >
          <b-card-text>
            <products></products>
          </b-card-text>
        </b-tab>
        <b-tab title="Promotion">
          <b-card-text>
            <promotions></promotions>
          </b-card-text>
        </b-tab>
        <b-tab title="Member">
          <b-card-text>
            <membership></membership>
          </b-card-text>
        </b-tab>
        <b-tab title="Cart">
          <b-card-text>
            <cart v-bind:cart="sharedState.cart"></cart>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
import CartVue from './Cart.vue'
import MemberVue from './Member.vue'
import MembershipVue from './Membership.vue'
import ProductsVue from './Products.vue'
import PromotionVue from './Promotion.vue'
import { store } from '../store.js'

export default {
  name: 'Home',
  data () {
    return {
      sharedState: store.state
    }
  },
  components: {
    products: ProductsVue,
    membership: MembershipVue,
    member: MemberVue,
    cart: CartVue,
    promotions: PromotionVue
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #e0e0e0;
}
</style>
