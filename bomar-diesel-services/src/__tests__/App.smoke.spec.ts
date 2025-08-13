/// <reference types="vitest" />
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'
import LandingPage from '@/views/LandingPage.vue'
import { describe, expect, it } from 'vitest'

describe('App smoke test', () => {
  it('mounts with router and vuetify', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', name: 'home', component: LandingPage }],
    })

    const wrapper = mount(App, { global: { plugins: [router, vuetify] } })
    await router.isReady()

    // App root should exist and render a main area
    expect(wrapper.find('.v-application').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true)
  })
})