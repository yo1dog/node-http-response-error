# http-response-error

HTTP Response Error

## Quick Start

```javascript
const HTTPResponseError = require('@yo1dog/http-response-error');

const res = await request('https://www.example.com/fubar');
if (res.statusCode !== 200) {
  throw new HTTPResponseError(res, `Unable to get fubar.`);
}
```


# Docs

## `new HTTPResponseError(res, [message])`

 param    | type     | description
----------|----------|-------------
`res`     | Response | Response object.
`message` | string   | A human-readable description of the error.


-----

## `HTTPResponseError.status`

## `HTTPResponseError.bodyObj`

## `HTTPResponseError.bodyStr`

## `HTTPResponseError.res`

## `HTTPResponseError.req`
