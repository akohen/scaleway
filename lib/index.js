"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Scaleway;

var _scwInstance = _interopRequireDefault(require("./scw-instance"));

var _scwLb = _interopRequireDefault(require("./scw-lb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Scaleway(_ref) {
  var token = _ref.token,
      organization = _ref.organization,
      _ref$region = _ref.region,
      region = _ref$region === void 0 ? 'fr-par' : _ref$region,
      _ref$zone = _ref.zone,
      zone = _ref$zone === void 0 ? 'fr-par-1' : _ref$zone;
  return {
    instances: new _scwInstance["default"]({
      token: token,
      organization: organization,
      zone: zone
    }),
    lb: new _scwLb["default"]({
      token: token,
      organization: organization,
      region: region
    })
  };
}