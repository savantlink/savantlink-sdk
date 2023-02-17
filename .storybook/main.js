// eslint-disable-next-line @typescript-eslint/no-var-requires
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
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/icons': path.resolve(__dirname, '../icons/'),
      '@': path.resolve(__dirname, '../src/'),
    }

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

    // const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    // fileLoaderRule.exclude = /\.svg$/

    // config.module.rules.push({
    //   test: /\.svg$/i,
    //   issuer: /\.[jt]sx?$/,
    //   use: [
    //     {
    //       loader: '@svgr/webpack',
    //       options: {
    //         svgoConfig: {
    //           plugins: {
    //             removeViewBox: false,
    //           },
    //         },
    //       },
    //     },
    //   ],
    // })

    return config
  },
}
