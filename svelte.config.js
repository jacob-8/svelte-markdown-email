import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	compilerOptions: {
    // disable all warnings coming from node_modules and all accessibility warnings
    warningFilter: (warning) => {
      if (warning.filename?.includes('node_modules'))
        return false
      if (warning.code.startsWith('a11y'))
        return false
      if (warning.message.includes('Self-closing HTML tags'))
        return false
      return true
    },
  },

	vitePlugin: {
		inspector: {
			holdMode: true, // alt + x
		},
	},
};

export default config;
