<template>
  <b-container fluid>
    <div>
      <b-table hover :items="this.cart" :fields="fields">
      </b-table>
      <b-row>
        <b-col>Total Discount: RM{{ this.getTotalDiscount }}</b-col>
        <b-col>Total Amount: RM{{ this.getTotalAmount }}</b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'Cart',
  props: ['cart'],
  data() {
    return {
      sharedState: store.state,
      promotions: store.state.promotions,
      fields: [
        {
          key: 'productName',
          label: 'Product'
        },
        {
          key: 'quantity'
        },
        {
          key: 'price',
          sortable: true,
          formatter: (value, key, item) => {
            let promo = this.getPromotions(item);
            if (promo) {
              if (item.quantity >= promo.minQty) {
                item.pricePerUnitAfterDiscount = promo.price;
              }
            }
            return 'RM' + item.price;
          }
        },
        {
          key: 'discountedPrice',
          label: 'Price After Discount',
          formatter: (value, key, item) => {
            let discountedPrice = item.pricePerUnitAfterDiscount
              ? 'RM' + item.pricePerUnitAfterDiscount
              : '-';
            return discountedPrice;
          }
        },
        {
          key: 'subtotal',
          label: 'Subtotal',
          formatter: (value, key, item) => {
            let subtotal = (item.price * item.quantity).toFixed(2);
            item.subtotal = subtotal;
            return 'RM' + subtotal;
          }
        },
        {
          key: 'discount',
          label: 'Discount',
          formatter: (value, key, item) => {
            let discountedPrice = this.getDiscount(item);
            if (discountedPrice) {
              return discountedPrice.toFixed(2);
            }
            return '-';
          }
        },
        {
          key: 'subtotalAfterDiscount',
          label: 'Subtotal After Discount',
          formatter: (value, key, item) => {
            if(item.discountedPrice){
              item.subtotalAfterDiscount = item.subtotal - item.discountedPrice
              return (item.subtotal - item.discountedPrice).toFixed(2)
            }
            return '-';
          }
        }
      ],
      totalAmount: ''
    };
  },
  computed: {
    getTotalAmount: function(val) {
      if (this.sharedState.cart.length == 0) {
        return '-';
      }
      let totalAmount = 0;
      this.sharedState.cart.forEach(function(data) {
        totalAmount += data.subtotalAfterDiscount;
      });
      return totalAmount.toFixed(2);
    },
    getTotalDiscount(item){
      if (this.sharedState.cart.length == 0) {
        return '-';
      }
      let totalDiscountAmount = 0;
      this.sharedState.cart.forEach(function(data) {
        totalDiscountAmount += data.discountedPrice;
      });
      return totalDiscountAmount.toFixed(2);
    },
  },  
  methods: {
    getBundlePrice(item, bundleCriteria) {
      if (item.quantity >= bundleCriteria.buyQty) {
        let totalFreeQty = Math.floor(item.quantity/ bundleCriteria.buyQty)* bundleCriteria.freeQty
        let bundlePrice = item.price * (item.quantity - totalFreeQty);
        return bundlePrice;
      }
    },
    getPromotions(item) {
      return this.promotions.find((data)=>{
        return data.productName == item.productName && data.membershipLevel == this.sharedState.currentMember.membershipLevel;
      })
    },
    getDiscount (item) {
      let promo = this.getPromotions(item)
      let discountedPrice = 0

      if(promo){
        if (promo.isBundle) {
          discountedPrice = item.subtotal - this.getBundlePrice(
            item, promo.bundleCriteria
          );
        } else if ( item.quantity >= promo.minQty ) {
          discountedPrice = (item.price - item.pricePerUnitAfterDiscount) * item.quantity;
        }
      }else{
        discountedPrice = item.subtotal * this.getMemberDiscount()/100
      }
      item.discountedPrice = discountedPrice;

      return discountedPrice
    },
    getMemberDiscount (){
      if(this.sharedState.currentMember){
        let membership = this.sharedState.membership.find(data=>{
          return data.member_level == this.sharedState.currentMember.membershipLevel;
        })
        if(membership){
          return membership.discount_amount;
        }
      }
    }
  },
  components: {}
};
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
.oldPrice {
  text-decoration: line-through;
}
</style>
