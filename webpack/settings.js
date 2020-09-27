const path = require('path')

const BUILD_PATH = path.resolve(__dirname, '..', 'build')
const DEV_BUILD_PATH = path.resolve(BUILD_PATH)
const CONTENT_BASE = path.resolve(__dirname, '..', 'src')

module.exports = {
  paths: {
    buildPath: BUILD_PATH,
    devBuildPath: DEV_BUILD_PATH,
    contentBase: CONTENT_BASE
  }
}
