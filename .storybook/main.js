const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
    stories: ['../**/*.stories.js'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    '@emotion/core': toPath('node_modules/@emotion/react'),
                    '@emotion/styled': toPath('node_modules/@emotion/styled'),
                    'emotion-theming': toPath('node_modules/@emotion/react'),
                },
            },
        }
    },
}
