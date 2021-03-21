// module.exports = ({ file, options, env }) => ({
//   parser: false,
//   plugins: {
//     'postcss-import': {},
//     'postcss-cssnext': {},
//     'cssnano':  env === 'production'  ? {} : false
//   }
// });

module.exports = {
  plugins: {
      'postcss-preset-env': {
          browsers: 'last 2 versions',
      },
  },
}
