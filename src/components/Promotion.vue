<template>
  <b-container fluid>
    <div>
      <b-table hover :items="sharedState.promotions" :fields="fields"></b-table>
    </div>
  </b-container>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'Promotion',
  data () {
    return {
      sharedState: store.state,
      fields: [
          {
            key: 'productName',
            sortable: true
          },
          {
            key: 'membershipLevel',
            label: 'Entitled Membership',
            sortable: true
          },
          {
            key: 'isBundle',
            label: 'Bundle Sales',
            sortable: true
          },
        ],
    }
  },
  components: {}
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
