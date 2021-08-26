/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');
module.exports = async (on, config) => {
  //const b = await z({ projectRoot: "/Users/georgebell/Desktop/Code/jc-mobile", }, { allowedHost: "localhost" })
  //console.log(b)

  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code

    webpackOptions: {
      resolve: {
        alias: {
          'react-native/Libraries/Renderer/shims/ReactNativePropRegistry':
            'react-native-web/dist/modules/ReactNativePropRegistry',
          'react-native': 'react-native-web',
          'react-native-maps': 'react-native-web-maps',
        },
      },
      module: {
        rules: [
          {
            test: /\.[jt]sx?$/,

            use: {
              loader: 'babel-loader',
              options: {
                presets: ['babel-preset-expo'],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-transform-modules-commonjs',
                ],
                cacheDirectory: true,
              },
            },
            include: [
              path.resolve('../src/graphql/mutations'),
              path.resolve('node_modules/@aws-sdk'),
              path.resolve('node_modules/native-base-shoutem-theme'),
              path.resolve('node_modules/react-navigation'),
              path.resolve('node_modules/react-native-easy-grid'),
              path.resolve('node_modules/react-native-drawer'),
              path.resolve('node_modules/react-native-elements'),
              path.resolve('node_modules/react-native-safe-area-view'),
              path.resolve('node_modules/react-native-vector-icons'),
              path.resolve(
                'node_modules/react-native-keyboard-aware-scroll-view'
              ),
              path.resolve('node_modules/react-native-web'),
              path.resolve('node_modules/react-native-tab-view'),
              path.resolve('node_modules/aws-amplify-react-native'),
              path.resolve('node_modules/static-container'),
              path.resolve('node_modules/@zoomus'),
            ],
          },
        ],
      },
    },
    watchOptions: {},
  };

  require('@cypress/code-coverage/task')(on, config);

  on('file:preprocessor', webpack(options.webpackOptions, config));
  return config;
};
