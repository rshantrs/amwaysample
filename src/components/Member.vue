<template>
  <b-container fluid>
    <div>
      <p>Please pick a member.</p>
      <b-table
        hover
        :items="sharedState.members"
        :fields="fields"
        :select-mode="selectMode"
        selectable
        @row-selected="onRowSelected"
      >
      </b-table>
    </div>
  </b-container>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'Member',
  data () {
    return {
      sharedState: store.state,
      fields: [
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'membership_level',
          label: 'label',
          sortable: true
        }
      ],
      selectMode: 'single',
      selected: {}
    }
  },
  methods: {
    onRowSelected (items) {
      this.sharedState.currentMember.name = items[0].name
      this.sharedState.currentMember.membershipLevel = items[0].membership_level
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
