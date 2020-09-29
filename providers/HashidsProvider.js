'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class HashidsProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Hisman/Services/Hashids', () => {
      const Config = this.app.use('Config')
      const Hashids = require('hashids/cjs')
      const { salt, minLength, alphabet } = Config.get('hashids')

      return new Hashids(salt, minLength, alphabet )
    })

    this.app.bind('Hisman/Traits/HashidsTrait', () => require('../src/Traits/HashidsTrait'))
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    //
  }
}

module.exports = HashidsProvider
