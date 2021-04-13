'use strict'

const chaiStream = require('chai-stream')
const path = require('path')

const chai = require('chai')

const expect = chai.expect
chai.use(chaiStream)

const { loadPresentationFiles } = require('../../../core/lib/presentation')

describe('Presentation lib', () => {
  describe('types', () => {
    it('loadPresentationFiles must be a function', () => {
      expect(typeof loadPresentationFiles).to.be.eq('function')
    })
  })

  describe('function', () => {
    const mock = require('mock-fs')

    beforeEach(() => {
      mock({
        'mocked-shower': mock.load(path.resolve(__dirname, '../../../templates/presentation')),
        'mocked-shower/node_modules/@shower/core/dist/shower.js': '(() => {})'
      })
    })

    afterEach(() => {
      mock.restore()
    })

    it('loadPresentationFiles should return a NodeJS.ReadableStream', () => {
      const dir = `${process.cwd()}/mocked-shower`
      process.chdir(dir)

      const stream = loadPresentationFiles()
      // eslint-disable-next-line no-unused-expressions
      expect(stream).to.be.a.ReadableStream
    })
  })
})
