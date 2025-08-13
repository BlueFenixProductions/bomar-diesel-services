import { mountWithVuetify } from '@/tests/test-utils'
import ServicesGrid from '../ServicesGrid.vue'

describe('ServicesGrid', () => {
  it('mounts and shows service cards', () => {
    const wrapper = mountWithVuetify(ServicesGrid)
    // At least one card should render when site.services has items
    const cards = wrapper.findAll('.v-card')
    expect(cards.length).toBeGreaterThan(0)
  })
})