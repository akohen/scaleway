"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ScalewayBase {
  constructor(url, {
    token,
    organization,
    region,
    zone,
    timeout = 2000
  }) {
    this.api = _axios.default.create({
      baseURL: url,
      timeout,
      headers: {
        'X-AUTH-TOKEN': token
      }
    });
    this.defaults = {
      organization,
      region,
      zone
    };
  }

  config(conf) {
    this.defaults = { ...this.defaults,
      ...conf
    };
  }

}

exports.default = ScalewayBase;