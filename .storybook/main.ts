import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	viteFinal: async (config) => {
        // Based on https://github.com/storybookjs/storybook/issues/25399#issuecomment-1905569873
        if (!config.build) {
            config.build = {};
        }
        config.build.target = ['es2022', 'edge89', 'firefox89', 'chrome89', 'safari15'];
        return config;
    },
};
export default config;
