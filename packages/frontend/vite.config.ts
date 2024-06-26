import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'node:path'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts(),
        copy({
            targets: [{ src: 'src/safelist-definition.ts', dest: 'dist/src' }],
            hook: 'writeBundle'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'grid',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
