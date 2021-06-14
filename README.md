# ChangeLog

## Reference:
其他作法
- [REST API 錯誤處理 | 讓錯誤代碼、錯誤名稱和錯誤信息更友好、更簡潔、更規範](https://www.youtube.com/watch?v=u3-WAGEn0W8&list=LL&index=4&t=484s)

---

## API FORMAT

### 成功格式：

#### 200 OK

```json
{
    "status": "success",
    "response": {
        "token": "token1239ihowcweoc"
    }
}
```

### 失敗格式：

#### 400 Bad Request

```json
{
    "status": "error",
    "errors": [
        {
            "code": 10002,
            "message": "參數:email，不可為空"
        },
        {
            "code": 10003,
            "message": "參數:password，不可為空"
        }
    ]
}
```

#### 404 Not Found
```json
{
    "status": "URL Note Found",
    "errors": [
        "Invalid URL"
    ]
}
```

#### 500
```json
{
    "status": "Server Error",
    "errors": [
        "SyntaxError: Unexpected token in JSON at position 23......."
    ]
}
```

### HTTP 狀態碼：

```javascript
const HttpStatusCode = {
  OK: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalError: 500,
}
```

### Response 狀態碼：
```javascript
const ResponseStatusCode = {
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
  NotFound: 'Note Found',
  InternalError: 'Server Error'
}
```