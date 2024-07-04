const path = require('path');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  const customConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve('src'),
      },
    },
  };

  console.log('config-overrides working', customConfig);
  return customConfig;
};
