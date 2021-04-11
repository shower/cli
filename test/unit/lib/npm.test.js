'use strict'

const chai = require('chai')

const expect = chai.expect

const { installDependencies } = require('../../../core/lib/npm')

describe('NPM lib', () => {
  describe('types', () => {
    it('installDependencies must be a function', () => {
      expect(typeof installDependencies).to.be.eq('function')
    })
  })
})
