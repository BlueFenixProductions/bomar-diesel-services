import { mount, type MountingOptions } from '@vue/test-utils'
import vuetify from '@/plugins/vuetify'

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