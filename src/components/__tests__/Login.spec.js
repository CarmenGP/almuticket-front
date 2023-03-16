import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
  it('should render the component', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.find('.input-container').exists()).toBe(true)
  })

  it('should require email to end with "@arrabalempleo.org"', () => {
    const wrapper = shallowMount(Login)
    wrapper.setData({ email: 'test@example.com' })
    wrapper.vm.submitForm()
    expect(wrapper.vm.$data.email).toBe('test@example.com')

    wrapper.setData({ email: 'test@arrabalempleo.org' })
    wrapper.vm.submitForm()
    expect(wrapper.vm.$data.email).toBe('test@arrabalempleo.org')
  })
})
