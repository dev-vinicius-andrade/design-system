import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/700.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { colors, font, radii, scrollbar, type ThemeName } from './tokens'

function definition(name: ThemeName): ThemeDefinition {
  const c = colors[name]
  return {
    dark: name === 'dark',
    colors: {
      background: c.background,
      surface: c.surface,
      primary: c.primary,
      'on-primary': c.onPrimary,
      secondary: c.secondary,
      error: c.error,
      success: c.success,
      info: c.info,
      warning: c.warning,
      'input-background': c.inputBackground,
    },
  }
}

export const themeConfig = (defaultTheme: ThemeName = 'dark') => ({
  defaultTheme,
  themes: { dark: definition('dark'), light: definition('light') },
})

export const componentDefaults = {
  VBtn: { variant: 'outlined' },
  VTextField: { variant: 'outlined' },
  VAutocomplete: { variant: 'outlined' },
  VSelect: { variant: 'outlined' },
} as const

/** Global CSS derived only from tokens and Vuetify theme variables. */
export function globalCss(): string {
  return `
html, body, .v-application { font-family: ${font.family} !important; }
.v-field { background: rgb(var(--v-theme-input-background)); border-radius: ${radii.input}; }
.v-field--variant-outlined .v-field__outline { color: rgb(var(--v-theme-secondary)); }
.v-field--variant-outlined .v-field__outline__start { border-radius: ${radii.input} 0 0 ${radii.input}; }
.v-field--variant-outlined .v-field__outline__end { border-radius: 0 ${radii.input} ${radii.input} 0; }
.v-field--error .v-field__outline { color: rgb(var(--v-theme-error)); }
.v-label.v-field-label { color: rgb(var(--v-theme-secondary)); }
* { scrollbar-width: thin; scrollbar-color: rgb(var(--v-theme-primary)) transparent; }
*::-webkit-scrollbar { width: ${scrollbar.size}; height: ${scrollbar.size}; }
*::-webkit-scrollbar-track { background: transparent; }
*::-webkit-scrollbar-thumb { background: rgb(var(--v-theme-primary)); border-radius: ${scrollbar.radius}; }
.font-mono { font-family: ${font.family}; }
`
}

export function installGlobalCss(doc: Document = document): void {
  const el = doc.createElement('style')
  el.setAttribute('data-app-theme', '')
  el.textContent = globalCss()
  doc.head.appendChild(el)
}

export function createAppVuetify(defaultTheme: ThemeName = 'dark') {
  installGlobalCss()
  return createVuetify({
    components,
    directives,
    theme: themeConfig(defaultTheme),
    defaults: componentDefaults,
  })
}
