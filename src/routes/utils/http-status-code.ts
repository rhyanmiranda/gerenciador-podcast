export enum HttpStatusCode {
  // Successful responses
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,

  // Redirection messages
  MovedPermanently = 301,
  Found = 302,
  NotModified = 304,
  TemporaryRedirect = 307,

  // Client error responses
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  Conflict = 409,
  Gone = 410,

  // Server error responses
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504
}