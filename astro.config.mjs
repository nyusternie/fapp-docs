// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FappParty 🎉 Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/nyusternie/fapp-party' },
			],
			sidebar: [
				{
					label: 'How-to Guides',
					items: [
						{ label: 'Discover Mini Apps', slug: 'guides/discover-mini-apps' },
						{ label: 'Earn Rewards', slug: 'guides/earn-rewards' },
						{ label: 'Become a Fan', slug: 'guides/become-a-fan' },
						{ label: 'Become A Sponsor', slug: 'guides/become-a-sponsor' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
    image: {
        service: {
            entrypoint: 'astro/assets/services/noop',
        },
    },
})
