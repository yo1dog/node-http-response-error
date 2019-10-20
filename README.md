# http-response-error

HTTP Response Error

## Quick Start

```javascript
const HTTPResponseError = require('@yo1dog/http-response-error');

new HTTPResponseError(404, `Document with id '${id}' does not exist.`);
```


# Docs

## `new HTTPResponseError(status, message, [{[code], [details]}])`

 param    | type   | description
----------|--------|-------------
`status`  | number | Status code.
`message` | string | A human-readable description of the error.
`code`    | string | Error code.


-----

## `CError.status`

## `CError.message`

## `CError.code`
