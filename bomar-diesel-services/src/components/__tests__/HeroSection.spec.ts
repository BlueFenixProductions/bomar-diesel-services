import { mountWithVuetify } from '@/tests/test-utils'
import HeroSection from '../HeroSection.vue'

describe('HeroSection', () => {
  it('renders without crashing and includes a heading and image container', () => {
    const wrapper = mountWithVuetify(HeroSection)
    expect(wrapper.find('h1').exists()).toBe(true)
    // Vuetify v-img renders a root with .v-img
    expect(wrapper.find('.v-img').exists()).toBe(true)
  })
})