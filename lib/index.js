"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Scaleway;

var _scwInstance = _interopRequireDefault(require("./scw-instance"));

var _scwLb = _interopRequireDefault(require("./scw-lb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Scaleway({
  token,
  organization,
  region = 'fr-par',
  zone = 'fr-par-1'
}) {
  return {
    instances: new _scwInstance.default({
      token,
      organization,
      zone
    }),
    lb: new _scwLb.default({
      token,
      organization,
      region
    })
  };
}