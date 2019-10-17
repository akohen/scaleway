import ScalewayBase from './scw-base';

export default class LoadBalancer extends ScalewayBase {
  constructor(args) {
    super('https://api.scaleway.com/lb/v1/regions/', args);
  }

  // Backends
  async addBackendServers({
    region = this.defaults.region,
    serverIps,
    id,
  }) {
    try {
      const response = await this.api.post(`${region}/backends/${id}/servers`, { server_ip: serverIps });
      return response.data;
    } catch (err) {
      console.error(`Failed to add backend servers: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }

  async setBackendServers({
    region = this.defaults.region,
    serverIps,
    id,
  }) {
    try {
      const response = await this.api.put(`${region}/backends/${id}/servers`, { server_ip: serverIps });
      return response.data;
    } catch (err) {
      console.error(`Failed to set backend servers: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }

  async removeBackendServers({
    region = this.defaults.region,
    serverIps,
    id,
  }) {
    try {
      const response = await this.api.delete(`${region}/backends/${id}/servers`, { server_ip: serverIps });
    } catch (err) {
      console.error(`Failed to delete backend servers: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }

  async getBackend({ region = this.defaults.region, id }) {
    try {
      const response = await this.api.get(`${region}/backends/${id}`);
      return response.data;
    } catch (err) {
      console.error(`Failed to get backend: ${err.message} - ${err.response.data.message}`);
      throw err.response.data;
    }
  }
}
