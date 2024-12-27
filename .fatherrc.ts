import { defineConfig } from 'father';

export default defineConfig({
  plugins: ['@rc-component/father-plugin'],
  esm: {
    alias: {
      'rc-util/lib': 'rc-util/es',
      'sryd/lib': 'sryd/es',
    },
  },
});
