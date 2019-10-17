import axios from 'axios';

export default class ScalewayBase {
  constructor(url, {
    token, organization, region, zone, timeout = 2000,
  }) {
    this.api = axios.create({
      baseURL: url,
      timeout,
      headers: { 'X-AUTH-TOKEN': token },
    });
    this.defaults = { organization, region, zone };
  }

  config(conf) {
    this.defaults = { ...this.defaults, ...conf };
  }
}
