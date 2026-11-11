import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginBundleObfuscator from 'vite-plugin-bundle-obfuscator'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === 'build'
      ? [
          vitePluginBundleObfuscator({
            autoExcludeNodeModules: true,
            threadPool: true,
            options: {
              compact: true,
              controlFlowFlattening: false,
              deadCodeInjection: false,
              stringArray: true,
            },
          }),
        ]
      : []),
  ],
}))
