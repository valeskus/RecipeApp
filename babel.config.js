module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
        ],
        alias: {
          '@UI': './src/UI',
          '@stores': './src/stores',
          '@components': './src/components',
          '@api': './src/api',
          '@managers': './src/managers',

        },
      },
    ],
  ],
};
