'use strict'

const assert = require('assert')
const { handler: pdf, messages } = require('../../core/command/pdf')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      assert.strictEqual(typeof pdf, 'function')
    })
  })
  describe('Interface', () => {
    it('Messages must provided "start" and "end" messages', () => {
      const { start, end } = messages({ file: '' })

      assert.strictEqual(typeof start, 'string')
      assert.strictEqual(typeof end, 'string')
    })
  })
})
