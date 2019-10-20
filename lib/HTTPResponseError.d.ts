declare class HTTPResponseError extends Error {
  /**
   * Creates an HTTP Response Erorr.
   */
  public constructor(
    res: import('request').Response,
    message: string
  );
  
  public status : number;
  public bodyObj: any;
  public bodyStr: string;
  public res    : import('request').Response;
  public req: {
    path  : string;
    url   : string;
    method: string;
  };
}

export = HTTPResponseError;