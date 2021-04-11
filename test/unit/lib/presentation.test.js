'use strict'

const chai = require('chai')

const expect = chai.expect

const { loadPresentationFiles } = require('../../../core/lib/presentation')

describe('Presentation lib', () => {
  describe('types', () => {
    it('loadPresentationFiles must be a function', () => {
      expect(typeof loadPresentationFiles).to.be.eq('function')
    })
  })
})
