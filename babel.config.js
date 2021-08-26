module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-dynamic-import-node',
      'transform-class-properties',
      'istanbul',
    ],
  };
};
