export const store = {
  debug: true,
  state: {
    cart: [{
      discountedPrice: 3600,
      price: 3488.99,
      pricePerUnitAfterDiscount: 2588.99,
      productName: "Kone",
      quantity: 4,
      subtotal: "13955.96",
      subtotalAfterDiscount: 10355.96
    },{
      discountedPrice: 105.99799999999999,
      price: 529.99,
      productName: "Ironhide Cartridge",
      quantity: 1,
      subtotal: "529.99",
      subtotalAfterDiscount: 423.992
    }],
    currentMember: {
      name: 'Mary', 
      membershipLevel: 'Diamond',
    },
    members: [
      { name: 'John', membership_level: 'Associate' },
      { name: 'Mary', membership_level: 'Diamond' }
    ],
    membership: [
      { member_level: 'Associate', discount_amount: 5 },
      { member_level: 'Diamond', discount_amount: 20 }
    ],
    promotions: [
      {
        productName: 'Kone',
        membershipLevel: 'Diamond',
        discountPercentage: '15',
        minQty: 3,
        maxQty: 999,
        isBundle: false,
        price: 2588.99,
        bundleCriteria: {
          buyQty: 0,
          freeQty: 0
        }
      },
      {
        productName: 'Ironhide Cartridge',
        membershipLevel: 'Diamond',
        discountPercentage: '15',
        minQty: 3,
        maxQty: 999,
        isBundle: true,
        bundleCriteria: {
          buyQty: 3,
          freeQty: 1
        }
      }
    ]
  }
}
