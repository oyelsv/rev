import { format } from 'date-fns';
import React from 'react';

import { Button } from '@/components/ui/button';

interface TimeLabelProps {
  date: Date | undefined;
  timeSlots: string[];
  onSelectTimeSlot?: (slot: string) => void;
}

export function TimeSlots({
  date = new Date(),
  timeSlots = ['9:00 am', '10:00 am', '11:00 am'],
  onSelectTimeSlot,
}: TimeLabelProps) {
  const formattedDate = format(date, 'MMMM do');

  return (
    <div className="px-1">
      <h2 className="leading-7 [&:not(:first-child)]:mt-2 mb-2">Today, {formattedDate}</h2>
      <div className="flex gap-1">
        {timeSlots.map((slot) => (
          <Button size="sm" variant="outline" key={slot} onClick={() => onSelectTimeSlot && onSelectTimeSlot(slot)}>
            <span className="text-sm font-medium">{slot}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

TimeSlots.displayName = 'TimeSlots';
