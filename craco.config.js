const fastRefreshCracoPlugin = require('craco-fast-refresh');

module.exports = () => {
  return {
    plugins: [{ plugin: fastRefreshCracoPlugin }],
  };
};
