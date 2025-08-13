import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const bomarTheme = {
  dark: false,
  colors: {
    primary: '#1E3A5F',    // navy
    secondary: '#2C6AA0',  // steel blue
    accent: '#C8102E',     // engine red
    surface: '#F2F5F8',
    background: '#FFFFFF',
    info: '#2C6AA0',
    success: '#2E7D32',
    warning: '#ED6C02',
    error: '#D32F2F'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'bomarTheme',
    themes: { bomarTheme }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  }
})