'use strict'

const chai = require('chai')

const expect = chai.expect

const { getEnv } = require('../../../core/lib/env')

describe('Env lib', () => {
  describe('types', () => {
    it('getEnv must be a function', () => {
      expect(typeof getEnv).to.be.eq('function')
    })
  })
})
