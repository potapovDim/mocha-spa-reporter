const fetch = require('node-fetch');
const { expect } = require('chai');

describe('Ababbagalamaga', () => {

  after('test after', () => {
    // expect(1).to.eql(2)
  })
  afterEach('test afterEach', () => {
    expect(1).to.eql(2)
  })
  before('test before', () => {

  })
  beforeEach('test beforeEach', () => {

  })


  it('a-----------', async () => {
    const imageProd = await fetch(`https://avatars0.githubusercontent.com/u/2991708?s=400&v=4`).then(res => res.buffer())
    spaReporter.createStep('step AAAAA')
    spaReporter.attachData({ test: 'test' })
    spaReporter.attachData('Step BBBBB')
    spaReporter.createStep('createStepdsadjasl')
    expect(1).to.eql(2)
    spaReporter.attachData(imageProd)
  })
})


describe('Battanshoper', () => {
  it('b-----------------', async () => {
    const imageProd = await fetch(`https://avatars0.githubusercontent.com/u/2991708?s=400&v=4`).then(res => res.buffer())
    spaReporter.createStep('step GGGGGGG')
    spaReporter.attachData({ test: 'test' })
    spaReporter.attachData('step XXXXXXXXX')
    spaReporter.createStep('createStepdsadjasl')
    spaReporter.attachData(imageProd)
  })
})

describe('Coccocolla', () => {
  it('c-----------------0', async () => {
    const imageProd = await fetch(`https://avatars0.githubusercontent.com/u/2991708?s=400&v=4`).then(res => res.buffer())
    spaReporter.createStep('step ZZZZZZZZ')
    spaReporter.attachData({ test: 'test' })
    spaReporter.attachData('step NNNNNNNN')
    spaReporter.createStep('createStepdsadjasl')
    spaReporter.attachData(imageProd)
  })
  it.skip('c-----------------1', async () => {
    // const imageProd = await fetch(`https://avatars0.githubusercontent.com/u/2991708?s=400&v=4`).then(res => res.buffer())
    spaReporter.createStep('step ZZZZZZZZ')
    spaReporter.attachData({ test: 'test' })
    spaReporter.attachData('step NNNNNNNN')

    spaReporter.createStep('createStepdsadjasl')
    spaReporter.attachData(imageProd)
  })
  it('c-----------------2', async () => {
    const imageProd = await fetch(`https://avatars0.githubusercontent.com/u/2991708?s=400&v=4`).then(res => res.buffer())
    spaReporter.createStep('step ZZZZZZZZ')
    spaReporter.attachData({ test: 'test' })
    expect(1).to.eql(2)
    spaReporter.attachData('step NNNNNNNN')
    spaReporter.createStep('createStepdsadjasl')
    spaReporter.attachData(imageProd)
  })
})