"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _scwBase = _interopRequireDefault(require("./scw-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadBalancer =
/*#__PURE__*/
function (_ScalewayBase) {
  _inherits(LoadBalancer, _ScalewayBase);

  function LoadBalancer(args) {
    _classCallCheck(this, LoadBalancer);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadBalancer).call(this, 'https://api.scaleway.com/lb/v1/regions/', args));
  } // Backends


  _createClass(LoadBalancer, [{
    key: "addBackendServers",
    value: function () {
      var _addBackendServers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref) {
        var _ref$region, region, serverIps, id, response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$region = _ref.region, region = _ref$region === void 0 ? this.defaults.region : _ref$region, serverIps = _ref.serverIps, id = _ref.id;
                _context.prev = 1;
                _context.next = 4;
                return this.api.post("".concat(region, "/backends/").concat(id, "/servers"), {
                  server_ip: serverIps
                });

              case 4:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.error("Failed to add backend servers: ".concat(_context.t0.message, " - ").concat(_context.t0.response.data.message));
                throw _context.t0.response.data;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function addBackendServers(_x) {
        return _addBackendServers.apply(this, arguments);
      }

      return addBackendServers;
    }()
  }, {
    key: "setBackendServers",
    value: function () {
      var _setBackendServers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref2) {
        var _ref2$region, region, serverIps, id, response;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref2$region = _ref2.region, region = _ref2$region === void 0 ? this.defaults.region : _ref2$region, serverIps = _ref2.serverIps, id = _ref2.id;
                _context2.prev = 1;
                _context2.next = 4;
                return this.api.put("".concat(region, "/backends/").concat(id, "/servers"), {
                  server_ip: serverIps
                });

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", response.data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                console.error("Failed to set backend servers: ".concat(_context2.t0.message, " - ").concat(_context2.t0.response.data.message));
                throw _context2.t0.response.data;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      function setBackendServers(_x2) {
        return _setBackendServers.apply(this, arguments);
      }

      return setBackendServers;
    }()
  }, {
    key: "removeBackendServers",
    value: function () {
      var _removeBackendServers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_ref3) {
        var _ref3$region, region, serverIps, id, response;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref3$region = _ref3.region, region = _ref3$region === void 0 ? this.defaults.region : _ref3$region, serverIps = _ref3.serverIps, id = _ref3.id;
                _context3.prev = 1;
                _context3.next = 4;
                return this.api["delete"]("".concat(region, "/backends/").concat(id, "/servers"), {
                  server_ip: serverIps
                });

              case 4:
                response = _context3.sent;
                _context3.next = 11;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                console.error("Failed to delete backend servers: ".concat(_context3.t0.message, " - ").concat(_context3.t0.response.data.message));
                throw _context3.t0.response.data;

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 7]]);
      }));

      function removeBackendServers(_x3) {
        return _removeBackendServers.apply(this, arguments);
      }

      return removeBackendServers;
    }()
  }, {
    key: "getBackend",
    value: function () {
      var _getBackend = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_ref4) {
        var _ref4$region, region, id, response;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref4$region = _ref4.region, region = _ref4$region === void 0 ? this.defaults.region : _ref4$region, id = _ref4.id;
                _context4.prev = 1;
                _context4.next = 4;
                return this.api.get("".concat(region, "/backends/").concat(id));

              case 4:
                response = _context4.sent;
                return _context4.abrupt("return", response.data);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                console.error("Failed to get backend: ".concat(_context4.t0.message, " - ").concat(_context4.t0.response.data.message));
                throw _context4.t0.response.data;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 8]]);
      }));

      function getBackend(_x4) {
        return _getBackend.apply(this, arguments);
      }

      return getBackend;
    }()
  }]);

  return LoadBalancer;
}(_scwBase["default"]);

exports["default"] = LoadBalancer;