'use strict'

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.copy(
      path.join(__dirname, './config/hashids.js'),
      path.join(cli.helpers.configPath(), 'hashids.js')
    )
    cli.command.completed('create', 'config/hashids.js')
  } catch (error) {
    // ignore error
  }
}
