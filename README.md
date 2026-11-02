# design-system

Shared visual identity for my apps: dark-first palette, JetBrains Mono, outlined Vuetify defaults, thin scrollbars and CodeMirror themes. Source-distributed TypeScript (your bundler, e.g. Vite, compiles it).

## Contents

| Import | Provides |
| --- | --- |
| `@dev-vinicius-andrade/design-system/tokens` | `colors` (dark/light), `font`, `radii`, `scrollbar`, `editor` palettes, types `ThemeName`, `ColorTokens`, `EditorPalette` |
| `@dev-vinicius-andrade/design-system/vuetify` | `createAppVuetify(defaultTheme)`, `themeConfig`, `componentDefaults`, `globalCss`, `installGlobalCss` (also loads JetBrains Mono, MDI icons, Vuetify styles) |
| `@dev-vinicius-andrade/design-system/codemirror` | `codeMirrorTheme('dark' \| 'light')`: editor theme + syntax highlighting (dark is the "barf" theme) |

## Install

Not published to a registry yet. Use a Git dependency:

```bash
npm install github:dev-vinicius-andrade/design-system
```

Peer dependencies: `vuetify`, `@mdi/font`, `@fontsource/jetbrains-mono`; for the CodeMirror theme also `@codemirror/language`, `@codemirror/state`, `@codemirror/view`, `@lezer/highlight`.

## Use

```ts
import { createApp } from 'vue'
import { createAppVuetify, installGlobalCss } from '@dev-vinicius-andrade/design-system/vuetify'

const app = createApp(App)
app.use(createAppVuetify('dark'))
installGlobalCss()
```

```ts
import { codeMirrorTheme } from '@dev-vinicius-andrade/design-system/codemirror'
const extensions = [codeMirrorTheme(isDark ? 'dark' : 'light')]
```

Components should read colors through Vuetify theme variables (`rgb(var(--v-theme-primary))`) or the token exports, never hard-coded hex values.

## Palette (dark)

background `#121212`, surface `#222222`, primary `#f5f5f5`, secondary `#b4b96b`, error `#ff4d4d`, success `#b3bb4b`, info `#4b9bb3`, warning `#b3a24b`. The light theme mirrors it with background `#f5f5f5` and primary `#222222`. Source of truth: `src/tokens.ts`.
