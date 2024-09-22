import { RoomTypeEnum } from './roomTypeEnum';

export interface Room {
  id: string;
  name: string;
  type: RoomTypeEnum;
  availability: {
    start: string; // e.g. "2023-08-31T09:00:00.399684+03:00 => Friday 31 August 2023 09:00:00"
    end: string; // e.g. "2023-08-31T10:00:00.399684+03:00 => Friday 31 August 2023 10:00:00"
  }[];
}
