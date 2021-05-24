<template>
  <b-container fluid>
    <div>
      <b-table hover :items="sharedState.promotions" :fields="fields">
        <template #cell(membershiplevel)="row">
          <b-form-select
            v-model="row.item.membershipLevel"
            :options="sharedState.membership"
            value-field="member_level"
            text-field="member_level"
          >
          </b-form-select>
        </template>

        <template #cell(isBundle)="row">
          <b-form-group v-slot="{ ariaDescribedby }" @click="row.toggleDetails">
            <b-form-radio
              v-model="row.item.isBundle"
              :aria-describedby="ariaDescribedby"
              aria-controls="bundle-details"
              value="true"
              >Yes</b-form-radio
            >
            <b-form-radio
              v-model="row.item.isBundle"
              :aria-describedby="ariaDescribedby"
              aria-controls="bundle-details"
              value="false"
              >No</b-form-radio
            >
          </b-form-group>

          <div
            class="bundle-details"
            v-if="row.item.isBundle == true || row.item.isBundle == 'true'"
          >
            <b-row>
              <b-col class="align-right">
                Buy
              </b-col>
              <b-col>
                <b-form-spinbutton
                  id="buyQty-spinBtn"
                  v-model="row.item.bundleCriteria.buyQty"
                  min="1"
                  max="100"
                ></b-form-spinbutton>
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col class="align-right">
                Free
              </b-col>
              <b-col>
                <b-form-spinbutton
                  id="freeQty-spinBtn"
                  v-model="row.item.bundleCriteria.freeQty"
                  min="1"
                  max="100"
                ></b-form-spinbutton>
              </b-col>
            </b-row>
          </div>
        </template>

        <template #cell(minQty)="row">
          <b-form-spinbutton
            id="minQty-spinBtn"
            v-model="row.item.minQty"
            min="1"
            max="100"
          ></b-form-spinbutton>
        </template>

        <template #cell(maxQty)="row">
          <b-form-spinbutton
            id="maxQty-spinBtn"
            v-model="row.item.maxQty"
            min="1"
            max="100"
          ></b-form-spinbutton>
        </template>

        <template #cell(price)="row">
          <b-form-input type="number" v-model="row.item.price"></b-form-input>
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
import { store } from '../store.js'

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
          label: 'Bundle Sales'
        },
        {
          key: 'minQty',
          label: 'Minimum Quantity'
        },
        {
          key: 'maxQty',
          label: 'Maximum Quantity'
        },
        {
          key: 'price',
          label: 'price'
        }
      ]
    }
  },
  methods: {
    toggleBundle (row) {
      row._showDetails = row.item.isBundle === 'true'
      row.detailsShowing = row.item.isBundle === 'true'
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

.align-right {
  text-align: right;
}

.bundle-details {
  background-color: rgb(227, 227, 227);
  padding: 5px;
}
</style>
