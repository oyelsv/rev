import { ProviderQualificationsEnum } from '@/features/providers';

export interface Provider {
  id: string;
  name: string;
  qualifications: ProviderQualificationsEnum[];
  servicesOffered: string[];
}
