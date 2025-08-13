import { mountWithVuetify } from '@/tests/test-utils'
import ContactBar from '../ContactBar.vue'

describe('ContactBar', () => {
  it('mounts and contains a button area', () => {
    const wrapper = mountWithVuetify(ContactBar)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.v-btn').exists()).toBe(true)
  })
})