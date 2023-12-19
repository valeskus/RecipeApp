module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
          '@services': './src/infrastructure/services',
        },
      },
    ],
  ],
};
