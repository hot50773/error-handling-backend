# ChangeLog
#### 0.0.2
更新錯誤格式（404, 500）

#### 0.0.1
專案初版

---

## Guide

- 其他作法: [REST API 錯誤處理 | 讓錯誤代碼、錯誤名稱和錯誤信息更友好、更簡潔、更規範](https://www.youtube.com/watch?v=u3-WAGEn0W8&list=LL&index=4&t=484s)

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
    "status": "error",
    "errors": [
        {
            "code": 90002,
            "message": "URL 錯誤"
        }
    ]
}
```

#### 500
```json
{
    "status": "error",
    "errors": [
        {
            "code": 90001,
            "message": "系統錯誤"
        }
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
  Error: 'error'
}
```