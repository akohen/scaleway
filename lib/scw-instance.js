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

var Instance =
/*#__PURE__*/
function (_ScalewayBase) {
  _inherits(Instance, _ScalewayBase);

  function Instance(args) {
    _classCallCheck(this, Instance);

    return _possibleConstructorReturn(this, _getPrototypeOf(Instance).call(this, 'https://api.scaleway.com/instance/v1/zones/', args));
  } // Server


  _createClass(Instance, [{
    key: "createServer",
    value: function () {
      var _createServer = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref) {
        var _ref$zone, zone, _ref$organization, organization, publicIp, name, volumes, image, commercialType, dynamicIpRequired, bootType, enableIpv6, response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$zone = _ref.zone, zone = _ref$zone === void 0 ? this.defaults.zone : _ref$zone, _ref$organization = _ref.organization, organization = _ref$organization === void 0 ? this.defaults.organization : _ref$organization, publicIp = _ref.publicIp, name = _ref.name, volumes = _ref.volumes, image = _ref.image, commercialType = _ref.commercialType, dynamicIpRequired = _ref.dynamicIpRequired, bootType = _ref.bootType, enableIpv6 = _ref.enableIpv6;
                _context.prev = 1;
                _context.next = 4;
                return this.api.post("".concat(zone, "/servers"), {
                  organization: organization,
                  public_ip: publicIp,
                  name: name,
                  volumes: volumes,
                  image: image,
                  commercial_type: commercialType,
                  dynamic_ip_required: dynamicIpRequired,
                  boot_type: bootType,
                  enable_ipv6: enableIpv6
                });

              case 4:
                response = _context.sent;
                return _context.abrupt("return", response.data.server);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.error("IP Creation failed: ".concat(_context.t0.message, " - ").concat(_context.t0.response.data.message));
                throw _context.t0.response.data;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function createServer(_x) {
        return _createServer.apply(this, arguments);
      }

      return createServer;
    }()
  }, {
    key: "deleteServer",
    value: function () {
      var _deleteServer = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref2) {
        var _ref2$zone, zone, id;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref2$zone = _ref2.zone, zone = _ref2$zone === void 0 ? this.defaults.zone : _ref2$zone, id = _ref2.id;
                _context2.prev = 1;
                _context2.next = 4;
                return this.api["delete"]("".concat(zone, "/servers/").concat(id));

              case 4:
                _context2.next = 10;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                console.error("Server deletion failed: ".concat(_context2.t0.message, " - ").concat(_context2.t0.response.data.message));
                throw _context2.t0.response.data;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 6]]);
      }));

      function deleteServer(_x2) {
        return _deleteServer.apply(this, arguments);
      }

      return deleteServer;
    }() // IP

  }, {
    key: "createIP",
    value: function () {
      var _createIP = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _ref3,
            _ref3$zone,
            zone,
            _ref3$organization,
            organization,
            response,
            _args3 = arguments;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref3 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, _ref3$zone = _ref3.zone, zone = _ref3$zone === void 0 ? this.defaults.zone : _ref3$zone, _ref3$organization = _ref3.organization, organization = _ref3$organization === void 0 ? this.defaults.organization : _ref3$organization;
                _context3.prev = 1;
                _context3.next = 4;
                return this.api.post("".concat(zone, "/ips"), {
                  organization: organization
                });

              case 4:
                response = _context3.sent;
                return _context3.abrupt("return", response.data.ip);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                console.error("IP Creation failed: ".concat(_context3.t0.message, " - ").concat(_context3.t0.response.data.message));
                throw _context3.t0.response.data;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8]]);
      }));

      function createIP() {
        return _createIP.apply(this, arguments);
      }

      return createIP;
    }()
  }, {
    key: "deleteIP",
    value: function () {
      var _deleteIP = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_ref4) {
        var _ref4$zone, zone, id;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref4$zone = _ref4.zone, zone = _ref4$zone === void 0 ? this.defaults.zone : _ref4$zone, id = _ref4.id;
                _context4.prev = 1;
                _context4.next = 4;
                return this.api["delete"]("".concat(zone, "/ips/").concat(id));

              case 4:
                _context4.next = 10;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](1);
                console.error("IP deletion failed: ".concat(_context4.t0.message, " - ").concat(_context4.t0.response.data.message));
                throw _context4.t0.response.data;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 6]]);
      }));

      function deleteIP(_x3) {
        return _deleteIP.apply(this, arguments);
      }

      return deleteIP;
    }()
  }, {
    key: "getIP",
    value: function () {
      var _getIP = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_ref5) {
        var _ref5$zone, zone, id, IP;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _ref5$zone = _ref5.zone, zone = _ref5$zone === void 0 ? this.defaults.zone : _ref5$zone, id = _ref5.id;
                _context5.prev = 1;
                _context5.next = 4;
                return this.api.get("".concat(zone, "/ips/").concat(id));

              case 4:
                IP = _context5.sent;
                return _context5.abrupt("return", IP.data.ip);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                console.error("IP get failed: ".concat(_context5.t0.message, " - ").concat(_context5.t0.response.data.message));
                throw _context5.t0.response.data;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 8]]);
      }));

      function getIP(_x4) {
        return _getIP.apply(this, arguments);
      }

      return getIP;
    }()
  }, {
    key: "listIPs",
    value: function () {
      var _listIPs = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        var _ref6,
            _ref6$zone,
            zone,
            ips,
            _args6 = arguments;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _ref6 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, _ref6$zone = _ref6.zone, zone = _ref6$zone === void 0 ? this.defaults.zone : _ref6$zone;
                _context6.prev = 1;
                _context6.next = 4;
                return this.api.get("".concat(zone, "/ips"));

              case 4:
                ips = _context6.sent;
                return _context6.abrupt("return", ips.data.ips);

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](1);
                console.error("IP list failed: ".concat(_context6.t0.message, " - ").concat(_context6.t0.response.data.message));
                throw _context6.t0.response.data;

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 8]]);
      }));

      function listIPs() {
        return _listIPs.apply(this, arguments);
      }

      return listIPs;
    }() // Volumes

  }, {
    key: "deleteVolume",
    value: function () {
      var _deleteVolume = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(_ref7) {
        var _ref7$zone, zone, id;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _ref7$zone = _ref7.zone, zone = _ref7$zone === void 0 ? this.defaults.zone : _ref7$zone, id = _ref7.id;
                _context7.prev = 1;
                _context7.next = 4;
                return this.api["delete"]("".concat(zone, "/volumes/").concat(id));

              case 4:
                _context7.next = 10;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](1);
                console.error("Volume deletion failed: ".concat(_context7.t0.message, " - ").concat(_context7.t0.response.data.message));
                throw _context7.t0.response.data;

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 6]]);
      }));

      function deleteVolume(_x5) {
        return _deleteVolume.apply(this, arguments);
      }

      return deleteVolume;
    }() // Other

  }, {
    key: "action",
    value: function () {
      var _action2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(_ref8) {
        var _ref8$zone, zone, id, _action, response;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _ref8$zone = _ref8.zone, zone = _ref8$zone === void 0 ? this.defaults.zone : _ref8$zone, id = _ref8.id, _action = _ref8.action;
                _context8.prev = 1;
                _context8.next = 4;
                return this.api.post("".concat(zone, "/servers/").concat(id, "/action"), {
                  action: _action
                });

              case 4:
                response = _context8.sent;
                return _context8.abrupt("return", response.data.task);

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](1);
                console.error("Action failed: ".concat(_context8.t0.message, " - ").concat(_context8.t0.response.data.message));
                throw _context8.t0.response.data;

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 8]]);
      }));

      function action(_x6) {
        return _action2.apply(this, arguments);
      }

      return action;
    }() // Metadata

  }, {
    key: "setCloudInit",
    value: function () {
      var _setCloudInit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(_ref9) {
        var _ref9$zone, zone, id, cloudInit;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _ref9$zone = _ref9.zone, zone = _ref9$zone === void 0 ? this.defaults.zone : _ref9$zone, id = _ref9.id, cloudInit = _ref9.cloudInit;
                _context9.prev = 1;
                _context9.next = 4;
                return this.api.patch("".concat(zone, "/servers/").concat(id, "/user_data/cloud-init"), cloudInit, {
                  headers: {
                    'Content-Type': 'text/plain'
                  }
                });

              case 4:
                _context9.next = 10;
                break;

              case 6:
                _context9.prev = 6;
                _context9.t0 = _context9["catch"](1);
                console.error("Setting cloud-init failed: ".concat(_context9.t0.message, " - ").concat(_context9.t0.response.data.message));
                throw _context9.t0.response.data;

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 6]]);
      }));

      function setCloudInit(_x7) {
        return _setCloudInit.apply(this, arguments);
      }

      return setCloudInit;
    }()
  }]);

  return Instance;
}(_scwBase["default"]);

exports["default"] = Instance;