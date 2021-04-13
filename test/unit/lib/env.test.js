'use strict'

const util = require('util')
const path = require('path')

const chai = require('chai')

const expect = chai.expect

const { getEnv } = require('../../../core/lib/env')

describe('Env lib', () => {
  describe('types', () => {
    it('getEnv must be a function', () => {
      expect(typeof getEnv).to.be.eq('function')
    })
  })

  describe('function', () => {
    const mock = require('mock-fs')

    beforeEach(() => {
      mock({
        'mocked-shower': mock.load(path.resolve(__dirname, '../../../templates/presentation'))
      })
    })

    afterEach(() => {
      mock.restore()
    })

    it('getEnv should return right path', () => {
      const dir = `${process.cwd()}/mocked-shower`
      const expectedResult = { path: '/workspaces/cli/mocked-shower' }
      const result = getEnv(dir)
      expect(util.isDeepStrictEqual(result, expectedResult)).to.be.eq(true)
    })
  })
})
