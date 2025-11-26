import {
  CloudSunIcon,
  MoonStarsIcon,
  SunHorizonIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import type { JSX, ReactNode } from 'react';
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
  children: ReactNode;
}

function AppointmentListItems({ children }: AppointmentListItemsProps) {
  return (
    <div className="flex flex-col items-center justify-between p-5">
      {children}
    </div>
  );
}

interface AppointmentListItemProps {
  appointment: Appointment;
  onDelete: (id: string) => void;
}

function AppointmentListItem({
  appointment,
  onDelete,
}: AppointmentListItemProps) {
  return (
    <div
      key={appointment.id}
      className="flex h-8 w-full flex-row items-center justify-between gap-0.5"
    >
      <div className="flex flex-row items-center gap-5 text-gray-200">
        <Text variant="title-md">{appointment.time}</Text>
        <Text variant="text-md">{appointment.clientName}</Text>
      </div>
      <IconButton icon={TrashIcon} onClick={() => onDelete(appointment.id)} />
    </div>
  );
}

function AppointmentListHeader({ turn }: { turn: Turn }) {
  const turnLabels: Record<Turn, { label: string; hours: string }> = {
    morning: { label: 'Manhã', hours: '09h-12h' },
    afternoon: { label: 'Tarde', hours: '12h-18h' },
    night: { label: 'Noite', hours: '18h-22h' },
  };

  const turnIcons: Record<Turn, JSX.Element> = {
    morning: (
      <SunHorizonIcon className="h-5 w-5 text-yellow-dark" weight="bold" />
    ),
    afternoon: (
      <CloudSunIcon className="h-5 w-5 text-yellow-dark" weight="bold" />
    ),
    night: <MoonStarsIcon className="h-5 w-5 text-yellow-dark" weight="bold" />,
  };

  return (
    <div className="flex flex-row items-center justify-between border-gray-600 border-b px-5 py-3">
      <div className="flex flex-row items-center gap-3">
        {turnIcons[turn]}
        <Text variant="text-sm" className="text-gray-300">
          {turnLabels[turn].label}
        </Text>
      </div>
      <Text variant="text-sm" className="text-gray-300">
        {turnLabels[turn].hours}
      </Text>
    </div>
  );
}

interface AppointmentListContainerProps {
  children: ReactNode;
}

function AppointmentListContainer({ children }: AppointmentListContainerProps) {
  return <div className="rounded-lg border border-gray-600">{children}</div>;
}

export const AppointmentList = {
  Container: AppointmentListContainer,
  Header: AppointmentListHeader,
  List: AppointmentListItems,
  Item: AppointmentListItem,
};
