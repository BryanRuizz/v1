import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator'

export default defineConfig({
  plugins: [
    react(),
    obfuscatorPlugin({
      apply: 'build',
      debugger: false,
      options: {
        compact: true,
        stringArray: true,
        stringArrayThreshold: 0.75,
      },
    }),
  ],
})