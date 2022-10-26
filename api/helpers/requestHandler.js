'use strict'

const requestHandler = {
  routeSanity,
  asyncWrapper
}

export default requestHandler

function routeSanity(request, response, next) {
  request.isMatched = true;
  process.nextTick(next);
}

function asyncWrapper(middleware) {
  // var {
  //   CustomError
  // } = this;
  return (request, response, next) => {
    if (response.body) {
      return process.nextTick(next);
    }

    return Promise.resolve(middleware(request, response, next)).catch(error => {
      // var responseBody;

      // if (error.constructor.name === 'ResponseBody') {
      //   responseBody = error;
      // } else if (error._isCustomError) {
      //   responseBody = error.getResponseBody();
      // } else {
      //   var err = new CustomError(error);
      //   responseBody = err.getResponseBody();
      // }

      response.body = error;
      next();
    });
  };
}