/** Visual identity tokens. Self-contained: no imports from the rest of the app. */

export type ThemeName = 'dark' | 'light'

export interface ColorTokens {
  background: string
  surface: string
  primary: string
  /** Text/icon color on top of primary. */
  onPrimary: string
  secondary: string
  error: string
  success: string
  info: string
  warning: string
  inputBackground: string
}

const shared = {
  secondary: '#b4b96b',
  error: '#ff4d4d',
  success: '#b3bb4b',
  info: '#4b9bb3',
  warning: '#b3a24b',
}

export const colors: Record<ThemeName, ColorTokens> = {
  dark: {
    ...shared,
    background: '#121212',
    surface: '#222222',
    primary: '#f5f5f5',
    onPrimary: '#222222',
    inputBackground: '#222930',
  },
  light: {
    ...shared,
    background: '#f5f5f5',
    surface: '#ffffff',
    primary: '#222222',
    onPrimary: '#f5f5f5',
    inputBackground: '#e3e8ec',
  },
}

export const font = {
  family: '"JetBrains Mono", monospace',
}

export const radii = {
  input: '15px',
}

export const scrollbar = {
  size: '10px',
  radius: '10px',
}

/** Editor palette; dark is the site's "barf" theme, light is a matching variant. */
export interface EditorPalette {
  background: string
  foreground: string
  caret: string
  selection: string
  gutterBackground: string
  gutterForeground: string
  lineHighlight: string
  comment: string
  string: string
  number: string
  bool: string
  keyword: string
  definitionKeyword: string
  variableName: string
  property: string
  tagName: string
}

export const editor: Record<ThemeName, EditorPalette> = {
  dark: {
    background: '#15191EFA',
    foreground: '#EEF2F7',
    caret: '#C4C4C4',
    selection: '#90B2D557',
    gutterBackground: '#15191EFA',
    gutterForeground: '#aaaaaa95',
    lineHighlight: '#57575712',
    comment: '#6E6E6E',
    string: '#5C81B3',
    number: '#C1E1B8',
    bool: '#53667D',
    keyword: '#697A8E',
    definitionKeyword: '#A3D295',
    variableName: '#708E67',
    property: '#ffffff',
    tagName: '#A3D295',
  },
  light: {
    background: '#f5f5f5',
    foreground: '#222222',
    caret: '#222222',
    selection: '#90B2D566',
    gutterBackground: '#e3e8ec',
    gutterForeground: '#666666',
    lineHighlight: '#00000008',
    comment: '#7a7a7a',
    string: '#2f5d8f',
    number: '#4a7a3a',
    bool: '#3d5068',
    keyword: '#4a5a70',
    definitionKeyword: '#4a7a3a',
    variableName: '#4f6b46',
    property: '#111111',
    tagName: '#4a7a3a',
  },
}
