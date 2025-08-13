import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'

const bomarTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#0A3D6B',      // deep marine blue (from logo badge)
    secondary: '#C4211E',    // engine red
    accent: '#2E80C4',       // lighter blue
    surface: '#F4F6F8',      // light gray
    background: '#E9EEF3',   // pale blue/gray
    info: '#2E80C4',
    success: '#2E7D32',
    warning: '#ED6C02',
    error: '#D32F2F',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'bomarTheme',
    themes: { bomarTheme },
  },
})