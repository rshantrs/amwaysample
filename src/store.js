export const store = {
  debug: true,
  state:{
    cart: [],
    currentMember: {},
    membership: [
      { member_level: 'Associate', discount_amount: 5 },
      { member_level: 'Diamond', discount_amount: 20 }
    ],
    promotions: [
      {
        productName: 'Kone',
        membershipLevel:'Diamond',
        discountPercentage: '15',
        minQty: 3,
        maxQty: 999,
        price: 2588.99
      },
      { 
        productName: 'Ironhide Cartridge',
        membershipLevel:'Diamond',
        discountPercentage: '15',
        minQty: 3,
        maxQty: 999,
        isBundle: true,
        bundleCriteria: {
          buyQty: 3,
          freeQty: 1
        }
      }
    ],
  },
  
};