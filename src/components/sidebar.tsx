import { UserSquareIcon } from '@phosphor-icons/react';
import { useMemo, useState } from 'react';
import { useAppointments } from '../context/appointments-context';
import { TimeSlot } from './time-slots';
import { Button } from './ui/button';
import { DatePicker } from './ui/datepicker';
import { Text } from './ui/text';

const ALL_TIMES = {
  morning: ['09:00', '10:00', '11:00'],
  afternoon: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
  night: ['19:00', '20:00', '21:00'],
};

function formatDateToISO(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function Sidebar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');

  const { addAppointment, getBookedTimesByDate } = useAppointments();

  const bookedTimes = useMemo(() => {
    return getBookedTimesByDate(formatDateToISO(selectedDate));
  }, [selectedDate, getBookedTimesByDate]);

  const morningTimes = useMemo(
    () =>
      ALL_TIMES.morning.map((time) => ({
        value: time,
        disabled: bookedTimes.includes(time),
      })),
    [bookedTimes],
  );

  const afternoonTimes = useMemo(
    () =>
      ALL_TIMES.afternoon.map((time) => ({
        value: time,
        disabled: bookedTimes.includes(time),
      })),
    [bookedTimes],
  );

  const nightTimes = useMemo(
    () =>
      ALL_TIMES.night.map((time) => ({
        value: time,
        disabled: bookedTimes.includes(time),
      })),
    [bookedTimes],
  );

  function handleTimeSelect(time: string) {
    setSelectedTime((state) => (state === time ? null : time));
  }

  function handleDateSelect(date: Date | null) {
    if (date) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  }

  function handleSubmit() {
    if (!selectedTime || !clientName.trim()) {
      return;
    }

    addAppointment({
      date: formatDateToISO(selectedDate),
      time: selectedTime,
      clientName: clientName.trim(),
    });

    setSelectedTime(null);
    setClientName('');
  }

  const isSubmitDisabled = !selectedTime || !clientName.trim();

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
            onDateSelect={handleDateSelect}
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
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
          AGENDAR
        </Button>
      </div>
    </aside>
  );
}
