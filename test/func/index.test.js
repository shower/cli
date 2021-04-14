'use strict'

const path = require('path')

const chai = require('chai')
const { chaiExecAsync } = require('@jsdevtools/chai-exec')

const expect = chai.expect
chai.use(chaiExecAsync)

chaiExecAsync.defaults = {
  command: 'npx',
  args: 'shower'
}

const VERSION = '0.3.0\n'
const FIRST_HELP_STRING = 'Usage: shower [--version] [--help] <command> [<args>]\n'
const FIRST_HELP_CREATE_STRING = 'shower create [<directory>]\n'
const FIRST_HELP_SERVE_STRING = 'shower serve\n'
const FIRST_HELP_BUNDLE_STRING = 'shower prepare\n'
const FIRST_HELP_ARCHIVE_STRING = 'shower archive\n'
const FIRST_HELP_PDF_STRING = 'shower pdf\n'
const FIRST_HELP_PUBLISH_STRING = 'shower publish\n'

describe('Integration test', () => {
  const mock = require('mock-fs')

  beforeEach(() => {
    mock({
      'mocked-shower': mock.load(path.resolve(__dirname, '../../templates/presentation')),
      'mocked-shower/node_modules/@shower/core/dist/shower.js': '(() => {})'
    })
  })

  afterEach(() => {
    mock.restore()
  })

  describe('shower', () => {
    it('default', async () => {
      const showerCLI = await chaiExecAsync()
      expect(showerCLI).to.exit.with.code(0)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stdout.to.be.empty
      expect(showerCLI).stderr.to.contain(FIRST_HELP_STRING)
      expect(showerCLI).output.to.contain(FIRST_HELP_STRING)
    })

    it('--cwd', async () => {
      let showerCLI = await chaiExecAsync(['--cwd'])
      expect(showerCLI).to.exit.with.code(0)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty

      showerCLI = await chaiExecAsync(['--cwd', `${process.cwd()}/mocked-shower`])
      expect(showerCLI).to.exit.with.code(0)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stdout.to.be.empty
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).output.to.be.empty
    })

    it('-h, --help', async () => {
      let showerCLI = await chaiExecAsync(['--help'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_STRING)

      showerCLI = await chaiExecAsync(['-h'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_STRING)
    })

    it('-v, --version', async () => {
      let showerCLI = await chaiExecAsync(['-v'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(VERSION)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(VERSION)

      showerCLI = await chaiExecAsync(['--version'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(VERSION)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(VERSION)
    })
  })

  describe('shower create', () => {
    // it('default', async () => {
    //   const dir = `${process.cwd()}/mocked-shower`
    //   process.chdir(dir)
    //   const showerCLI = await chaiExecAsync(['create'])
    // })

    it('-h, --help', async () => {
      let showerCLI = await chaiExecAsync(['create', '-h'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_CREATE_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_CREATE_STRING)

      showerCLI = await chaiExecAsync(['create', '--help'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_CREATE_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_CREATE_STRING)
    })

    // it('--yes, -y', async () => {
    //   let showerCLI = await chaiExecAsync(['create', '--yes, -y'])
    //   showerCLI = await chaiExecAsync(['create', '-h'])
    // })

    // it('--force, -f', async () => {
    //   let showerCLI = await chaiExecAsync(['create', '--force, -f'])
    //   showerCLI = await chaiExecAsync(['create', '-h'])
    // })

    // it('--no-interactive, -s', async () => {
    //   let showerCLI = await chaiExecAsync(['create', '--no-interactive, -s'])
    //   showerCLI = await chaiExecAsync(['create', '-h'])
    // })

    // it('--theme, -t', async () => {
    //   let showerCLI = await chaiExecAsync(['create', '--theme, -t'])
    //   showerCLI = await chaiExecAsync(['create', '-h'])
    // })

    // it('--ratio, -r', async () => {
    //   let showerCLI = await chaiExecAsync(['create', '--ratio, -r'])
    //   showerCLI = await chaiExecAsync(['create', '-h'])
    // })
  })

  describe('shower serve', () => {
    // it('default', async () => {
    //   const showerCLI = await chaiExecAsync(['serve'])
    // })

    it('-h, --help', async () => {
      let showerCLI = await chaiExecAsync(['serve', '-h'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_SERVE_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_SERVE_STRING)

      showerCLI = await chaiExecAsync(['serve', '--help'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_SERVE_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_SERVE_STRING)
    })

    // it('--open, -o', async () => {
    //   let showerCLI = await chaiExecAsync(['serve', '--open, -o'])
    //   showerCLI = await chaiExecAsync(['serve', '-h'])
    // })

    // it('--port, -p', async () => {
    //   let showerCLI = await chaiExecAsync(['serve', '--port, -p'])
    //   showerCLI = await chaiExecAsync(['serve', '-h'])
    // })

    // it('--ui', async () => {
    //   let showerCLI = await chaiExecAsync(['serve', '--ui'])
    // })

    // it('--notify', async () => {
    //   let showerCLI = await chaiExecAsync(['serve', '--notify'])
    // })
  })

  describe('shower prepare', () => {
    // it('default', async () => {
    //   const showerCLI = await chaiExecAsync(['prepare'])
    // })

    it('-h, --help', async () => {
      let showerCLI = await chaiExecAsync(['prepare', '-h'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_BUNDLE_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_BUNDLE_STRING)

      showerCLI = await chaiExecAsync(['prepare', '--help'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_BUNDLE_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_BUNDLE_STRING)
    })

    // it('--output, -o', async () => {
    //   let showerCLI = await chaiExecAsync(['prepare', '--output, -o'])
    //   showerCLI = await chaiExecAsync(['prepare', '-h'])
    // })

    // it('--files, -f', async () => {
    //   let showerCLI = await chaiExecAsync(['prepare', '--files, -f'])
    //   showerCLI = await chaiExecAsync(['prepare', '-h'])
    // })
  })

  describe('shower archive', () => {
    // it('default', async () => {
    //   const showerCLI = await chaiExecAsync(['archive'])
    // })

    it('-h, --help', async () => {
      let showerCLI = await chaiExecAsync(['archive', '-h'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_ARCHIVE_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_ARCHIVE_STRING)

      showerCLI = await chaiExecAsync(['archive', '--help'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_ARCHIVE_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_ARCHIVE_STRING)
    })

    // it('--output, -o', async () => {
    //   let showerCLI = await chaiExecAsync(['archive', '--output, -o'])
    //   showerCLI = await chaiExecAsync(['archive', '-h'])
    // })

    // it('--files, -f', async () => {
    //   let showerCLI = await chaiExecAsync(['archive', '--files, -f'])
    //   showerCLI = await chaiExecAsync(['archive', '-h'])
    // })
  })

  describe('shower pdf', () => {
    // it('default', async () => {
    //   const showerCLI = await chaiExecAsync(['pdf'])
    // })

    it('-h, --help', async () => {
      let showerCLI = await chaiExecAsync(['pdf', '-h'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_PDF_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_PDF_STRING)

      showerCLI = await chaiExecAsync(['pdf', '--help'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_PDF_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_PDF_STRING)
    })

    // it('--output, -o', async () => {
    //   let showerCLI = await chaiExecAsync(['pdf', '--output, -o'])
    //   showerCLI = await chaiExecAsync(['pdf', '-h'])
    // })
  })

  describe('shower publish', () => {
    // it('default', async () => {
    //   const dir = `${process.cwd()}/mocked-shower`
    //   process.chdir(dir)
    //   const showerCLI = await chaiExecAsync(['publish'])
    //   console.log(showerCLI)
    //   expect(showerCLI).to.exit.with.code(0)
    //   expect(showerCLI).stdout.to.contain(VERSION)
    //   expect(showerCLI).stdeto.be.empty
    //   expect(showerCLI).output.to.contain(VERSION)
    // })

    it('-h, --help', async () => {
      let showerCLI = await chaiExecAsync(['publish', '-h'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_PUBLISH_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_PUBLISH_STRING)

      showerCLI = await chaiExecAsync(['publish', '--help'])
      expect(showerCLI).to.exit.with.code(0)
      expect(showerCLI).stdout.to.contain(FIRST_HELP_PUBLISH_STRING)
      // eslint-disable-next-line no-unused-expressions
      expect(showerCLI).stderr.to.be.empty
      expect(showerCLI).output.to.contain(FIRST_HELP_PUBLISH_STRING)
    })

    // it('--files, -f', async () => {
    //   let showerCLI = await chaiExecAsync(['publish', '--files, -f'])
    //   showerCLI = await chaiExecAsync(['publish', '-h'])
    // })
  })
})
