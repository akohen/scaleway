import axios from 'axios';
import scaleway from './index';

const scw = scaleway({
  token: process.env.SCW_API_TOKEN,
  organization: process.env.SCW_ORGANIZATION_ID,
});

it('should call the IP creation endpoint', async () => {
  axios.get.mockResolvedValue({ data: { ips: [{ ip: '127.0.0.1' }] } });
  await scw.instances.listIPs();
});
