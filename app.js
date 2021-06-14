const express = require('express')
const app = express()

const port = process.env.port || 3000

const HttpStatusCode = require('my-status-code').HttpStatusCode
const ResponseStatusCode = require('my-status-code').ResponseStatusCode

const authRoute = require('./route/auth')

// Database

// MiddleWares
app.use(express.json())
app.use('/api/user', authRoute)

app.all('*', (req, res, next) => {
  try {
    res.status(HttpStatusCode.NotFound).json({
      status: ResponseStatusCode.NotFound,
      errors: ['Invalid URL']
    })
  }

  catch (err) {
    next(err)
  }
})

app.use(function (err, req, res, next) {
  console.error(err.stack)

  console.log({
    status: ResponseStatusCode.InternalError,
    errors: [err.stack]
  })
  res.status(HttpStatusCode.InternalError).json({
    status: ResponseStatusCode.InternalError,
    errors: [err.stack] // 正式環境需隱藏
  })
})


app.listen(port, () => {
  console.log(`🦈 Server started on port ${port}`)
})
