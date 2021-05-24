<template>
  <b-container fluid>
    <div>
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(quantity)="row">
          <b-row>
            <b-col>
              <b-form-spinbutton
                id="add-product"
                v-model="row.quantity"
                min="1"
                max="100"
              ></b-form-spinbutton>
            </b-col>
            <b-col>
              <b-button size="sm" @click="addProduct(row)" class="mr-2">
                Add
              </b-button>
            </b-col>
          </b-row>
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'Products',
  data () {
    return {
      sharedState: store.state,
      items: [
        { product_name: 'Kone', price: 3488.99, quantity: 0 },
        { product_name: 'Ironhide Cartridge', price: 529.99, quantity: 0 }
      ],
      fields: [
        {
          key: 'product_name',
          sortable: true
        },
        {
          key: 'price',
          sortable: true,
          formatter: (value, key) => {
            return 'RM' + value
          }
        },
        {
          key: 'quantity'
        }
      ]
    }
  },
  methods: {
    addProduct (data) {
      let product = {
        productName: data.item.product_name,
        quantity: data.quantity,
        price: data.item.price
      }
      let dataExist = this.sharedState.cart.find(data => {
        return data.productName === product.productName
      })
      if (dataExist) {
        this.sharedState.cart.forEach(data => {
          if (data.productName === product.productName) {
            data.quantity = product.quantity
          }
        })
      } else {
        this.sharedState.cart.push(product)
      }
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
