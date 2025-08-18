const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    // Add aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/icons': path.resolve(__dirname, '../assets/icons/'),
      '@': path.resolve(__dirname, '../src/'),
    }

    // Add SCSS support
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    })

    // Exclude SVGs from existing file-loader
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test && rule.test.test('.svg')) {
        return { ...rule, exclude: /\.svg$/ }
      }
      return rule
    })

    // Add SVGR loader for SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
