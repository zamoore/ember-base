'use strict';

const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        cacheInclude: [/.*\.(css|hbs|ts|js)$/, /.tailwind\/config\.js$/],
        plugins: [
          {
            module: autoprefixer,
            options: {},
          },
          {
            module: tailwind,
            options: {
              config: './app/styles/tailwind/config.js',
            },
          },
        ],
      },
    },
  });

  return app.toTree();
};
