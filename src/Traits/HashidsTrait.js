'use strict'

const Hashids = use('Adonis/Addons/Hisman/Services/Hashids')

class HashidsTrait {
  register (Model, customOptions = {}) {
    Model.prototype.getId = function(id) {
      return Hashids.encode(id)
    }

    Model.findByHashids = function(id) {
      return Model.find(Hashids.decode(id))
    }
  }
}

module.exports = HashidsTrait
