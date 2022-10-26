'use strict'

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResponseBody {
  constructor(statusCode, message, data, error) {
    this.statusCode = statusCode;
    this.status = _http.default.STATUS_CODES[statusCode];
    this.message = message;
    this.data = data;
    this.error = error || undefined;
  }
}

function handleResponse(request, response, next) {
  var resBody = response.encryptedBody || response.body || {};
  var {
    statusCode
  } = resBody;
  var handler = [301, 302].indexOf(statusCode) > -1 ? _redirectResponse : _sendResponse;
  handler(request, response, next);
}

function _sendResponse(request, response, next) {
  var resBody = response.encryptedBody || response.body || {};
  var {
    statusCode
  } = resBody;

  if (!resBody || !statusCode) {
    resBody = new ResponseBody(500, 'Response Data Not Found!');
  }

  return response.status(resBody.statusCode).json(resBody);
}

function _redirectResponse(request, response, next) {
  var resBody = response.encryptedBody || response.body || {};
  var {
    statusCode,
    data
  } = resBody;
  return response.status(statusCode).redirect(data);
}

export default { ResponseBody, handleResponse }