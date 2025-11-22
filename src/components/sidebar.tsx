import { UserSquareIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { TimeSlot } from './time-slots';
import { Button } from './ui/button';
import { DatePicker } from './ui/datepicker';
import { Text } from './ui/text';

type Time = {
  value: string;
  disabled: boolean;
};

export function Sidebar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const morningTimes: Time[] = [
    { value: '09:00', disabled: false },
    { value: '10:00', disabled: false },
    { value: '11:00', disabled: true },
    { value: '12:00', disabled: false },
  ];

  const afternoonTimes: Time[] = [
    { value: '13:00', disabled: true },
    { value: '14:00', disabled: true },
    { value: '15:00', disabled: true },
    { value: '16:00', disabled: false },
    { value: '17:00', disabled: true },
    { value: '18:00', disabled: false },
  ];

  const nightTimes: Time[] = [
    { value: '19:00', disabled: false },
    { value: '20:00', disabled: false },
    { value: '21:00', disabled: true },
  ];

  function handleTimeSelect(time: string) {
    setSelectedTime((state) => (state === time ? null : time));
  }

  return (
    <aside className="m-3 w-full max-w-[498px] rounded-xl bg-gray-700 p-20">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <Text as="h1" variant="title-lg" className="text-gray-100">
          Agende um atendimento
        </Text>
        <Text variant="text-sm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col gap-8">
        {/* Date Section */}
        <div className="flex flex-col gap-2">
          <Text variant="title-md" className="text-gray-200">
            Data
          </Text>
          <DatePicker
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            enableMinDate
          />
        </div>

        {/* Time Section */}
        <div className="flex flex-col gap-2">
          <span className="font-bold leading-6">Horários</span>

          {/* Morning Slot */}
          <TimeSlot
            title="Manhã"
            times={morningTimes}
            onTimeSelect={handleTimeSelect}
            selectedTime={selectedTime}
          />

          {/* Afternoon Slot */}
          <TimeSlot
            title="Tarde"
            times={afternoonTimes}
            onTimeSelect={handleTimeSelect}
            selectedTime={selectedTime}
          />

          {/* Night Slot */}
          <TimeSlot
            title="Noite"
            times={nightTimes}
            onTimeSelect={handleTimeSelect}
            selectedTime={selectedTime}
          />
        </div>

        {/* Client Section */}
        <div>
          <span className="mb-2 block font-bold leading-6">Cliente</span>
          <div className="flex h-12 w-full cursor-text items-center justify-between gap-2 rounded-lg border border-gray-500 px-3 text-gray-200 transition-colors duration-150 focus-within:border-yellow">
            <UserSquareIcon className="h-5 w-5 text-yellow" weight="bold" />
            <input
              type="text"
              className="flex-1 bg-transparent outline-none placeholder:text-gray-400"
              placeholder="Nome do cliente"
            />
          </div>
        </div>

        <Button onClick={() => alert('AGENDAR')}>AGENDAR</Button>
      </div>
    </aside>
  );
}
