exports.setUp =  function (app) {
  // 搜索框接口mock
  app.get('/api/test', (req, res) => {
    const keyWords = req.query.keyWords
    res.json({
      success: true,
      data: keyWords ? [
        {name: 'Tommy', age: 27}
      ] : []
    })
  })
}