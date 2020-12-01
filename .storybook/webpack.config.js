const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
        require.resolve('react-docgen-typescript-loader'),
      ],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
