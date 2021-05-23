<template>
  <b-container fluid>
    <div>
      <b-table hover :items="sharedState.membership" :fields="fields"></b-table>
    </div>
  </b-container>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'Membership',
  data () {
    return {
      sharedState: store.state,
      fields: [
        {
          key: 'member_level',
          sortable: true
        },
        {
          key: 'discount_amount',
          sortable: true,
          formatter: (value, key) => {
            return value + '%'
          }
        }
      ]
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
