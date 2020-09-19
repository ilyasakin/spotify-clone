module.exports = () => {
  return {
    plugins: [
      { plugin: require('craco-fast-refresh') },
      {
        plugin: require('craco-plugin-scoped-css'),
      },
    ],
  };
};
