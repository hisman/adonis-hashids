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
    this.app.singleton('Adonis/Addons/Hisman/Services/Hashids', () => {
      const Config = this.app.use('Config')
      const Hashids = require('hashids/cjs')
      const { salt, minLength, alphabet } = Config.get('hashids')

      return new Hashids(salt, minLength, alphabet )
    })
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
