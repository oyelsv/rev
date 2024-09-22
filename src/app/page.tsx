import React from 'react';

import { Scheduler } from '@/components/Scheduler';
import { DateTimePicker } from '@/components/DateTimePicker';

export default function Home() {
  return (
    <div className="p-4">
      <DateTimePicker />
      <Scheduler />
    </div>
  );
}
