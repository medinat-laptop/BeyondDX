
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  cacheDir: join(tmpdir(), 'aicapb-2026-registration-vite-cache'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
