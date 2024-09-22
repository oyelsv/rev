import { RoomTypeEnum } from '@/features/rooms/models';
import { ProviderQualificationsEnum } from '@/features/providers/models/providerQualificationsEnum';

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  requiredQualifications: ProviderQualificationsEnum[];
  roomTypeRequired: RoomTypeEnum;
}
