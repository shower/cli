'use strict'

const assert = require('assert')
const { handler: serve } = require('../../core/command/serve')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      assert.strictEqual(typeof serve, 'function')
    })
  })
})
