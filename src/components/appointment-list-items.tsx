import { SunHorizonIcon, TrashIcon } from '@phosphor-icons/react';
import { IconButton } from './ui/icon-button';
import { Text } from './ui/text';

type Turn = 'morning' | 'afternoon' | 'night';

export type Appointment = {
  id: string;
  time: string;
  clientName: string;
  turn: Turn;
};

interface AppointmentListItemsProps {
  appointments: Appointment[];
  onDeleteAppointment: (id: string) => void;
  turn: Turn;
}

export function AppointmentListItems({
  appointments,
  onDeleteAppointment,
  turn,
}: AppointmentListItemsProps) {
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.turn === turn,
  );

  return (
    <div className="rounded-lg border border-gray-600">
      <div className="flex flex-row items-center justify-between border-gray-600 border-b px-5 py-3">
        <div className="flex flex-row items-center gap-3">
          <SunHorizonIcon className="h-5 w-5 text-yellow-dark" weight="bold" />
          <Text variant="text-sm" className="text-gray-300">
            Manhã
          </Text>
        </div>
        <Text variant="text-sm" className="text-gray-300">
          09h-12h
        </Text>
      </div>

      <div className="flex flex-col items-center justify-between p-5">
        {filteredAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex h-8 w-full flex-row items-center justify-between gap-0.5"
          >
            <div className="flex flex-row items-center gap-5 text-gray-200">
              <Text variant="title-md">{appointment.time}</Text>
              <Text variant="text-md">{appointment.clientName}</Text>
            </div>
            <IconButton
              icon={TrashIcon}
              onClick={() => onDeleteAppointment(appointment.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
