'use strict'

const path = require('path')


module.exports = async function (cli) {
  try {
    await cli.copy(
      path.join(__dirname, './config/hashids.js'),
      path.join(cli.helpers.configPath(), 'hashids.js')
    )
    cli.command.completed('create', 'config/hashids.js')

    await cli.copy(
      path.join(__dirname, './src/Traits/HashidsTrait.js'),
      path.join(cli.helpers.appRoot(), '/app/Models/Traits/HashidsTrait.js')
    )
    cli.command.completed('create', 'HashidsTrait.js')
  } catch (error) {
    // ignore error
  }
}
