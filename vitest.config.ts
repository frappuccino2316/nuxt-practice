import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

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
  plugins: [vue()],
});
