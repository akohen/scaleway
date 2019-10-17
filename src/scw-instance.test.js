import axios from 'axios';
import Instance from './scw-instance';

const instance = new Instance({
  token: 'token',
  organization: 'org',
  region: 'fr-par',
  zone: 'fr-par-1',
});

it('should call the IP creation endpoint', async () => {
  axios.post.mockResolvedValue({ data: { ip: '127.0.0.1' } });
  const IP = await instance.createIP();
  expect(axios.post).toHaveBeenCalledTimes(1);
  expect(axios.post).toHaveBeenCalledWith('fr-par-1/ips', { organization: 'org' });
  expect(IP).toBe('127.0.0.1');
});
