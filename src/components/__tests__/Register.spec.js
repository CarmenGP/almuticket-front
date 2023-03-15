import { shallowMount } from '@vue/test-utils'
import RegistrationForm from '@/components/myComponents/RegistrationForm.vue'


describe('RegistrationForm.vue', () => {
    test('validates email domain', () => {
        const wrapper = shallowMount(RegistrationForm)
        wrapper.setData({ email: 'test@gmail.com' })
        expect(wrapper.vm.emailIsValid).toBe(false)
      })
})