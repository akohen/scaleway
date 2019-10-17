"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scwBase = _interopRequireDefault(require("./scw-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Instance extends _scwBase.default {
  constructor(args) {
    super('https://api.scaleway.com/instance/v1/zones/', args);
  } // Server


  async createServer({
    zone = this.defaults.zone,
    organization = this.defaults.organization,
    publicIp,
    name,
    volumes,
    image,
    commercialType,
    dynamicIpRequired,
    bootType,
    enableIpv6
  }) {
    try {
      const response = await this.api.post(`${zone}/servers`, {
        organization,
        public_ip: publicIp,
        name,
        volumes,
        image,
        commercial_type: commercialType,
        dynamic_ip_required: dynamicIpRequired,
        boot_type: bootType,
        enable_ipv6: enableIpv6
      });
      return response.data.server;
    } catch (err) {
      console.error(`IP Creation failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }

  async deleteServer({
    zone = this.defaults.zone,
    id
  }) {
    try {
      await this.api.delete(`${zone}/servers/${id}`);
    } catch (err) {
      console.error(`Server deletion failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  } // IP


  async createIP({
    zone = this.defaults.zone,
    organization = this.defaults.organization
  } = {}) {
    try {
      const response = await this.api.post(`${zone}/ips`, {
        organization
      });
      return response.data.ip;
    } catch (err) {
      console.error(`IP Creation failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }

  async deleteIP({
    zone = this.defaults.zone,
    id
  }) {
    try {
      await this.api.delete(`${zone}/ips/${id}`);
    } catch (err) {
      console.error(`IP deletion failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }

  async getIP({
    zone = this.defaults.zone,
    id
  }) {
    try {
      const IP = await this.api.get(`${zone}/ips/${id}`);
      return IP.data.ip;
    } catch (err) {
      console.error(`IP get failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }

  async listIPs({
    zone = this.defaults.zone
  } = {}) {
    try {
      const ips = await this.api.get(`${zone}/ips`);
      return ips.data.ips;
    } catch (err) {
      console.error(`IP list failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  } // Volumes


  async deleteVolume({
    zone = this.defaults.zone,
    id
  }) {
    try {
      await this.api.delete(`${zone}/volumes/${id}`);
    } catch (err) {
      console.error(`Volume deletion failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  } // Other


  async action({
    zone = this.defaults.zone,
    id,
    action
  }) {
    try {
      const response = await this.api.post(`${zone}/servers/${id}/action`, {
        action
      });
      return response.data.task;
    } catch (err) {
      console.error(`Action failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  } // Metadata


  async setCloudInit({
    zone = this.defaults.zone,
    id,
    cloudInit
  }) {
    try {
      await this.api.patch(`${zone}/servers/${id}/user_data/cloud-init`, cloudInit, {
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    } catch (err) {
      console.error(`Setting cloud-init failed: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }

}

exports.default = Instance;