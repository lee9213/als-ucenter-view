'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  CLIENT_ID: '"ucenter"',
  CLIENT_SECRET: '"123456"'
})
