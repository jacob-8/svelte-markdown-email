import {
  defineConfig,
  presetIcons,
  presetUno ,
} from 'unocss'

export default defineConfig({
  // shortcuts: [],
  presets: [
    presetUno(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': '0px',
      },
    }),
  ],
  // safelist: [],
})
