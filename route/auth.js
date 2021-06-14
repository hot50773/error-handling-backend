const router = require('express').Router()

const ErrorAccount = require('my-error-code').ErrorAccount

const HttpStatusCode = require('my-status-code').HttpStatusCode
const ResponseStatusCode = require('my-status-code').ResponseStatusCode

// LOGIN
router.post('/login', async (req, res, next) => {
  const data = {
    email: req.body.email || null,
    password: req.body.password || null
  }
  // Apply Validation
  const errors = []

  if (data.email === null) {
    errors.push(ErrorAccount.ParamEmptyEmail)
  }

  if (data.password === null) {
    errors.push(ErrorAccount.ParamEmptyPassword)
  }

  if (errors.length > 0) {
    return res.status(HttpStatusCode.BadRequest).json({
      status: ResponseStatusCode.Error,
      errors
    })
  }

  try {
    console.log('try')
    // throw new Error("myException")
  } catch (err) {
    next(err)

    return
  }

  // Check email existence (toy data => email: admin@emial.com)
  if (data.email !== 'admin@email.com') {
    return res.status(HttpStatusCode.BadRequest).json({
      status: ResponseStatusCode.Error,
      errors: [ErrorAccount.InvalidEmailOrPassword]
    })
  }

  console.log(`A user has logged in`)

  const token = 'token1239ihowcweoc'

  res.status(HttpStatusCode.OK).json({
    status: ResponseStatusCode.Success,
    response: {
      token
    }
  })
})

module.exports = router
