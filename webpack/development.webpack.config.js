const make = require('./make-webpack-config')
const settings = require('./settings')

module.exports = make({
  outputPath: settings.paths.devBuildPath,
  envFile: './env/development.env',
  isProduction: false
})
