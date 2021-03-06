export const store = {
  debug: true,
  state: {
    cart: [],
    currentMember: {},
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
