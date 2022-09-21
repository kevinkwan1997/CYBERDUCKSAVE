import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "$base": path.resolve("./src/components/base/*"),
      "$buttons": path.resolve("./src/components/buttons/*"),
      "$layouts": path.resolve("./src/components/layouts/*"),
      "$lists": path.resolve("./src/components/lists/*"),
      "$shared": path.resolve("./src/components/shared/*"),
    }
  }
})
