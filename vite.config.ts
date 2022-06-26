import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteAliases({
      dir: 'src',
      prefix: '@',
      deep: true,
      depth: 1,
      createLog: false,
      logPath: 'src/logs',
      createGlobalAlias: true,
      adjustDuplicates: false,
      useAbsolute: false,
      useIndexes: false,
      useConfig: true,
      useTypescript: true,
      root: process.cwd(),
    }),
  ],
});
