module.exports = function MainService(){
    this.on('process', () => true),

    this.before('CREATE', 'Images', req => {
      console.log('Create called')
      console.log(JSON.stringify(req.data))
      req.data.url = `main/Images(${req.data.ID})/content`
  })
  }