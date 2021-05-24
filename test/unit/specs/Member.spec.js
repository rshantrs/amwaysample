import Vue from 'vue'
import Member from '@/components/Member'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { mount , createLocalVue } from '@vue/test-utils'
import { store } from './mockData/mockStore'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Member.vue', () => {
  const wrapper = mount(Member,{
    stubs: ['mockStore'],
    localVue
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should return function', () => {
    expect(typeof Member.data).toBe('function')
  })

  it('spy on onRowSelected', () => {
    jest.mock('./mockData/mockStore')

    let member =  { name: 'John', membership_level: 'Associate' }
    const spy = jest.spyOn(Member.methods, 'onRowSelected').mockReturnValue(true);
    
    let onRowSelected = Member.methods.onRowSelected(member)

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  })
})