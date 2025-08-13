import { mountWithVuetify } from '@/tests/test-utils'
import ServicesGrid from '../ServicesGrid.vue'
import { site } from '@/content/site'

describe('ServicesGrid', () => {
  it('lists all service titles', () => {
    const wrapper = mountWithVuetify(ServicesGrid)
    for (const s of site.services) {
      expect(wrapper.text()).toContain(s.title)
    }
  })
})