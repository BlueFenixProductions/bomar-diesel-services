// filepath: /Users/chris/Documents/GitHub/bomar-diesel-services/bomar-diesel-services/src/tests/test-utils.ts
import { mount, type MountingOptions } from '@vue/test-utils'
import vuetify from '@/plugins/vuetify'
import { defineComponent, h } from 'vue'

// Mount with Vuetify installed
export function mountWithVuetify<T>(component: any, options: MountingOptions<T> = {}) {
  return mount(component, {
    global: {
      plugins: [vuetify],
      stubs: { transition: false },
      ...(options.global || {}),
    },
    ...options,
  })
}

// Helper to mount simple slots wrappers if needed
export const Wrapper = (slot = '') =>
  defineComponent({ render() { return h('div', {}, slot ? [h('div', { innerHTML: slot })] : []) } })