import type { ComponentProps } from 'react';
import { Button } from './ui/button';
import { Text } from './ui/text';

type Time = {
  value: string;
  disabled?: boolean;
};

interface TimeSlotProps extends ComponentProps<'div'> {
  title: string;
  times: Time[];
  selectedTime?: string | null;
  onTimeSelect: (time: string) => void;
}

export function TimeSlot({
  title,
  times,
  onTimeSelect,
  selectedTime,
}: TimeSlotProps) {
  return (
    <div className="flex flex-col gap-3">
      <Text variant="text-sm">{title}</Text>
      <div className="grid grid-cols-4 gap-2">
        {times.map((time) => (
          <Button
            key={time.value}
            variant="secondary"
            disabled={time.disabled}
            onClick={() => onTimeSelect(time.value)}
            selected={selectedTime === time.value}
          >
            {time.value}
          </Button>
        ))}
      </div>
    </div>
  );
}
