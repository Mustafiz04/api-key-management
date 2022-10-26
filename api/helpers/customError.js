'use strict'

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CustomError {
  constructor(statusCode, message, data, error) {
    this.statusCode = statusCode;
    this.status = _http.default.STATUS_CODES[statusCode];
    this.message = message;
    this.data = data;
  }
}

export default CustomError