const express = require('express')
const app = express()
const port = 3000 // run ở cổng nào

app.get('/', (req, res) => {// địnhh nghĩa router
  res.send('Hello World!ss')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})