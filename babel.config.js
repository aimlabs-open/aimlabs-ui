module.exports = {
  presets: [
    ['@vue/app', {
        "useBuiltIns": "entry",
        "corejs": 3
    }]
  ],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-export-default-from"
  ],
  ignore: [
  'dist/*.js',
  'packages/**/*.js'
  ]
}
