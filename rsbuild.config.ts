import { pluginBabel } from '@rsbuild/plugin-babel';
import { defineConfig } from '@rsbuild/core';

const entry = {
  index: {
    import: './index.ts',
    html: false,
  },
};

export default defineConfig({

  output: {
    target: 'node',
    distPath: './build',
    minify: false,
    externals: 'date-fns',
    filenameHash: true,
    manifest: false,
    // polyfill: 'entry',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@custom-types': './src/types',
    },
  },
  source: {
    entry
  },
  plugins: [pluginBabel()],
   performance: {
    buildCache: false,
    removeConsole: true,
  },
});