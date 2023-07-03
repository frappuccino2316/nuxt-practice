import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      include: ['components/**/*.{vue}'],
      exclude: [],
      all: true,
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue'],
    }),
  ],
});
