import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'
import LandingPage from '@/views/LandingPage.vue'

describe('App', () => {
  it('mounts with router and vuetify', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', name: 'home', component: LandingPage }],
    })

    const wrapper = mount(App, {
      global: { plugins: [router, vuetify] },
    })

    await router.isReady()
    expect(wrapper.text()).toContain('Request Service')
  })
})