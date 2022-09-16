import { defineConfig } from 'astro/config';
import prereact from '@astrojs/preact'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		prereact(),
		// Enable React for the Algolia search component.
		react(),
	],
	site: `http://astro.build`,
});
