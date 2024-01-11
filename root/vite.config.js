import { resolve } from 'path';
import { defineConfig } from 'vite';

const dir = (...args) => resolve(__dirname, ...args);

export default defineConfig({
  root: 'src',
  publicDir: dir('public'),
  server: {
    port: 3000
  },
  build: {
    outDir: dir('dist'),
    emptyOutDir: true
  }
});
