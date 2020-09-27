const make = require('./make-webpack-config')
const settings = require('./settings')

module.exports = make({
  outputPath: settings.paths.buildPath,
  envFile: './env/production.env',
  isProduction: true
})
