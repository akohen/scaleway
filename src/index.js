import Instance from './scw-instance';
import LoadBalancer from './scw-lb';

export default function Scaleway({
  token, organization, region = 'fr-par', zone = 'fr-par-1',
}) {
  return {
    instances: new Instance({
      token, organization, zone,
    }),
    lb: new LoadBalancer({
      token, organization, region,
    }),
  };
}
