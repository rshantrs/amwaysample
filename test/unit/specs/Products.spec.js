import Vue from 'vue'
import Products from '@/components/Products'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { mount , createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Products.vue', () => {
  const wrapper = mount(Products,{
    localVue
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should return function', () => {
    expect(typeof Products.data).toBe('function')
  })

  it('spy on addProduct', () => {    
    let data = {
      item:  { product_name: 'Kone', price: 3488.99, quantity: 0 }
    }
    const spy = jest.spyOn(Products.methods, 'addProduct');
    let addProduct = Products.methods.addProduct(data)

    expect(spy).toHaveBeenCalled();
    expect(addProduct).not.toBeUndefined()
  })
})