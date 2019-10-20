const ExtendableError = require('@yo1dog/extendable-error');


class HTTPResponseError extends ExtendableError {
  /**
   * Formats an error message around an HTTP response.
   * 
   * Built to work with "request" library.
   * 
   * @param {import('request').Response} res 
   * @param {string} message 
   */
  constructor(res, message) {
    const req = {
      path  : res.request.path,
      url   : res.request.href,
      method: res.request.method
    };
    
    const status = res.statusCode;
    
    if (message) {
      message += '\n';
    }
    else {
      message = '';
    }
    
    // add the HTTP request URL to the message
    if (req.url || req.path) {
      message +=
        'HTTP Request URL: ' +
        (req.method? req.method + ' ' : '') +
        (req.url || req.path) + '\n';
    }
    
    // add the HTTP status to the message
    message += `HTTP Response Status: ${status} ${res.statusMessage}`;
    
    let bodyStr;
    let bodyObj;
    
    if (typeof res.body === 'string') {
      bodyStr = res.body;
      try {
        bodyObj = JSON.parse(bodyStr);
      }
      catch (err) {/*noop*/}
    }
    else if (res.body) {
      bodyObj = res.body;
      bodyStr = JSON.stringify(res.body);
    }
    
    // add the body to the message
    message +=
      '\nHTTP Response Body: ' +
      (bodyObj? JSON.stringify(bodyObj, null, '  ') : '\n' + bodyStr);
    
    // set the message
    super(message);
    this.setUnenumerable('status',  status );
    this.setUnenumerable('bodyObj', bodyObj);
    this.setUnenumerable('bodyStr', bodyStr);
    this.setUnenumerable('res',     res    );
    this.setUnenumerable('req',     req    );
  }
}


module.exports = HTTPResponseError;
