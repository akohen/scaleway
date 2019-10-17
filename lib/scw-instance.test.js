"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _scwInstance = _interopRequireDefault(require("./scw-instance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var instance = new _scwInstance["default"]({
  token: 'token',
  organization: 'org',
  region: 'fr-par',
  zone: 'fr-par-1'
});
it('should call the IP creation endpoint',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var IP;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _axios["default"].post.mockResolvedValue({
            data: {
              ip: '127.0.0.1'
            }
          });

          _context.next = 3;
          return instance.createIP();

        case 3:
          IP = _context.sent;
          expect(_axios["default"].post).toHaveBeenCalledTimes(1);
          expect(_axios["default"].post).toHaveBeenCalledWith('fr-par-1/ips', {
            organization: 'org'
          });
          expect(IP).toBe('127.0.0.1');

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));