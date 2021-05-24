import Vue from 'vue'
import Promotion from '@/components/Promotion'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { mount , createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Promotion.vue', () => {
  const wrapper = mount(Promotion,{
    localVue
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should return function', () => {
    expect(typeof Promotion.data).toBe('function')
  })

  it('spy on toggleBundle', () => {
    let row = {
      _showDetails: 'true',
      detailsShowing: 'true',
      item: {
        isBundle: 'true',
      }
    }
    const spy = jest.spyOn(Promotion.methods, 'toggleBundle');
    let toggleBundle = Promotion.methods.toggleBundle(row)

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  })
})