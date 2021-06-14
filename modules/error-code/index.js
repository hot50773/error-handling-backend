class BaseError extends Error {
  constructor (
    code = 10000,
    message = 'Error'
  ) {
    super()

    this.code = code
    this.message = message

    Error.captureStackTrace(this, this.constructor)
  }
}

const ErrorAccount = {}

ErrorAccount.ParamEmptyName         = new BaseError(10001, '參數:name，不可為空')
ErrorAccount.ParamEmptyEmail        = new BaseError(10002, '參數:email，不可為空')
ErrorAccount.ParamEmptyPassword     = new BaseError(10003, '參數:password，不可為空')
ErrorAccount.ParamInvalidEmail      = new BaseError(10004, '參數:email，須為正確的電子信箱格式')
ErrorAccount.ParamExistEmail        = new BaseError(10005, '參數:email，此電子信箱已被使用')
ErrorAccount.InvalidEmailOrPassword = new BaseError(10006, '參數:email, password，帳號或密碼錯誤')
ErrorAccount.UnknownError           = new BaseError(10999, '未知錯誤')

module.exports.ErrorAccount = ErrorAccount
// module.exports.HTTP400Error = HTTP400Error