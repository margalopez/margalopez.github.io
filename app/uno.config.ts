import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetWind3 from '@unocss/preset-wind3'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    presets: [
        presetWind3(),
        presetIcons({}),
    ],
    transformers: [
        transformerDirectives(),
    ],
    shortcuts: {
        layout: 'w-full mx-auto px-4 max-w-screen-lg',
    },
    theme: {
        colors: {
            primary: '#ee8695',
            secondary: '#fbbbad',
            tertiary: '#4a7a96',
            // functional
            boxes: '#333f58',
            background: '#292831',
            foreground: '#ffffff',
            // semantic
            white: '#ffffff',
            black: '#000000',
            // miscellaneous
            'lospec500-eggplant': '#2C1E31',
            'lospec500-black': '#10121C'
        },
        fontFamily: {
            main: ['Comfortaa', 'sans-serif'],
            secondary: ['Pixelify Sans', 'sans-serif'],
        },
        zIndex: {
            nav: 50,
        }
    }
})