import { mountWithVuetify } from '@/tests/test-utils'
import ContactBar from '../ContactBar.vue'
import { site } from '@/content/site'

describe('ContactBar', () => {
  it('renders contact placeholders', () => {
    const wrapper = mountWithVuetify(ContactBar)
    expect(wrapper.text()).toContain(site.phone)
    expect(wrapper.text()).toContain(site.email)
    expect(wrapper.text()).toContain(site.address)
    expect(wrapper.text()).toContain(site.dispatch)
  })
})