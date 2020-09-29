'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Salt
  |--------------------------------------------------------------------------
  |
  */
  salt: Env.get('HASHIDS_SALT', 'salt'),

  /*
  |--------------------------------------------------------------------------
  | Minimal Length
  |--------------------------------------------------------------------------
  |
  */
  minLength: 11,

  /*
  |--------------------------------------------------------------------------
  | Alphabet
  |--------------------------------------------------------------------------
  |
  */
  alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
}