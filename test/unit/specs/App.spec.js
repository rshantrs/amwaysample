import Vue from 'vue'
import App from '@/App'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { mount , createLocalVue, shallowMount} from '@vue/test-utils'


const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)

describe('App.vue', () => {
  const wrapper = shallowMount(App, {
    stubs: ['router-link', 'router-view'],
    localVue
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})