import Vue from 'vue'
import Membership from '@/components/Membership'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { mount , createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Membership.vue', () => {
  const wrapper = mount(Membership,{
    localVue
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should return function', () => {
    expect(typeof Membership.data).toBe('function')
  })
})