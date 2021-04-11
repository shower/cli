'use strict'

const assert = require('assert')
const { handler: publish, messages } = require('../../core/command/publish')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      assert.strictEqual(typeof publish, 'function')
    })
  })
  describe('Interface', () => {
    it('Messages must provided "end" message', () => {
      const { end } = messages({})

      assert.strictEqual(typeof end, 'string')
    })
  })
})
