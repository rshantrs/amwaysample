import Vue from 'vue'
import Cart from '@/components/Cart'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { mount , createLocalVue } from '@vue/test-utils'
import { store } from './mockData/mockStore'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

let item = {
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

let bundleCriteria = {
  buyQty: 3,
  freeQty: 1
}

describe('Cart.vue', () => {
  const wrapper = mount(Cart,{
    localVue
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should return function', () => {
    expect(typeof Cart.data).toBe('function')
  })

  it('spy on getBundlePrice', () => {
    const spy = jest.spyOn(Cart.methods, 'getBundlePrice');
    let getBundlePrice = Cart.methods.getBundlePrice(item, bundleCriteria)

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  })

  it('spy on getPromotions', () => {    
    const spy = jest.spyOn(Cart.methods, 'getPromotions').mockReturnValue(true);
    let getPromotions = Cart.methods.getPromotions(item)

    expect(spy).toHaveBeenCalled();
    expect(spy).toBeTruthy()
    spy.mockRestore();
  })

  it('spy on getDiscount', () => {    
    const spy = jest.spyOn(Cart.methods, 'getDiscount').mockReturnValue(true);
    let getDiscount = Cart.methods.getDiscount(item)

    expect(spy).toHaveBeenCalled();
    expect(spy).toBeTruthy()
    spy.mockRestore();
  })
})