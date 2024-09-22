import { ProviderQualificationsEnum } from './providerQualificationsEnum';

export interface Provider {
  id: string;
  name: string;
  qualifications: ProviderQualificationsEnum[];
  servicesOffered: string[];
}
