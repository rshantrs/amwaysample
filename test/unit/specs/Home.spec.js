import Vue from 'vue'
import Home from '@/components/Home'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { mount , createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Home.vue', () => {
  const wrapper = mount(Home,{
    localVue
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should return function', () => {
    expect(typeof Home.data).toBe('function')
  })
})