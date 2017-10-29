const fetch = require('node-fetch');

describe('A', () => {
  it('a', async () => {
    const imageProd = await fetch(`https://avatars0.githubusercontent.com/u/2991708?s=400&v=4`).then(res => res.buffer())
    spaReporter.createStep('dsadasjdlkasjl')
    spaReporter.attachData({test: 'test'})
    spaReporter.attachData('dsadasd')
    spaReporter.createStep('createStepdsadjasl')
    spaReporter.attachData(imageProd)
  })
})