'use client';

import React from 'react';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TimeLabelProps {
  date: Date | undefined;
  timeSlots: string[];
  onSelectTimeSlot?: (slot: string) => void;
}

export default function TimeSlots({
  date = new Date(),
  timeSlots = ['9:00 am', '10:00 am', '11:00 am'],
  onSelectTimeSlot,
}: TimeLabelProps) {
  const formattedDate = format(date, 'MMMM do');

  return (
    <div className="px-1">
      <h2 className="leading-7 [&:not(:first-child)]:mt-2 mb-2">Today, {formattedDate}</h2>
      <div className="flex gap-1">
        {timeSlots.map((slot, index) => (
          <Button
            size="sm"
            variant="outline"
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            onClick={() => onSelectTimeSlot && onSelectTimeSlot(slot)}
          >
            <span className="text-sm font-medium">{slot}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export function DateTimePicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="p-2 rounded-md border w-full max-w-72 flex flex-col">
      <h2 className="text-xl font-semibold tracking-tight mx-auto">Select a time:</h2>
      <Separator className="my-2" />
      <Calendar className="p-0 m-auto" mode="single" selected={date} fromDate={new Date()} onSelect={setDate} />
      <Separator className="my-2" />
      <div className="flex items-center gap-1 px-1">
        <h2 className="text-sm font-bold">Selected provider:</h2>
        <div className="flex items-center">
          <Avatar className="w-5 h-5">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <span className="ml-2 text-sm font-medium leading-none">Ashley Brown</span>
        </div>
      </div>
      <Separator className="my-2" />
      <TimeSlots
        date={date}
        timeSlots={['4:30 pm', '5:30 pm', '6:30 pm']}
        onSelectTimeSlot={() => console.log(12345)}
      />
    </div>
  );
}

DateTimePicker.displayName = 'DateTimePicker';
