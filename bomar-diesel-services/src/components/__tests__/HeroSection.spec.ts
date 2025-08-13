import { mountWithVuetify } from '@/tests/test-utils'
import HeroSection from '../HeroSection.vue'
import { site } from '@/content/site'

describe('HeroSection', () => {
  it('renders headline and CTA', () => {
    const wrapper = mountWithVuetify(HeroSection)
    expect(wrapper.text()).toContain(site.hero.title)
    expect(wrapper.text()).toContain(site.hero.cta)
  })

  it('shows the hero image', () => {
    const wrapper = mountWithVuetify(HeroSection)
    const logoEl = wrapper.find('.hero-logo')
    expect(logoEl.exists()).toBe(true)
  })
})