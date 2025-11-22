import {
  CloudSunIcon,
  MoonStarsIcon,
  SunHorizonIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { DatePicker } from './ui/datepicker';
import { IconButton } from './ui/icon-button';
import { Text } from './ui/text';

export function Appointments() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 p-10 px-32 py-20">
      {/* Header */}
      <div className="flex max-h-40 w-full max-w-[682px] flex-1 flex-row items-start justify-between gap-3">
        <div className="space-y-1">
          <Text as="h1" variant="title-lg" className="text-gray-100">
            Sua agenda
          </Text>
          <Text variant="text-sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>

        <DatePicker
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
      </div>

      {/* Content */}
      <div className="flex w-full max-w-[682px] flex-col gap-3">
        {/* Morning appointments */}
        <div className="rounded-lg border border-gray-600">
          <div className="flex flex-row items-center justify-between border-gray-600 border-b px-5 py-3">
            <div className="flex flex-row items-center gap-3">
              <SunHorizonIcon
                className="h-5 w-5 text-yellow-dark"
                weight="bold"
              />
              <Text variant="text-sm" className="text-gray-300">
                Manhã
              </Text>
            </div>
            <Text variant="text-sm" className="text-gray-300">
              09h-12h
            </Text>
          </div>

          <div className="flex flex-col items-center justify-between p-5">
            <div className="flex h-8 w-full flex-row items-center justify-between gap-0.5">
              <div className="flex flex-row items-center gap-5 text-gray-200">
                <Text variant="title-md">11:00</Text>
                <Text variant="text-md">Ryan Dorwart</Text>
              </div>
              <IconButton icon={TrashIcon} />
            </div>
          </div>
        </div>

        {/* Afternoon appointments */}
        <div className="rounded-lg border border-gray-600">
          <div className="flex flex-row items-center justify-between border-gray-600 border-b px-5 py-3">
            <div className="flex flex-row items-center gap-3">
              <CloudSunIcon
                className="h-5 w-5 text-yellow-dark"
                weight="bold"
              />
              <Text variant="text-sm" className="text-gray-300">
                Tarde
              </Text>
            </div>
            <Text variant="text-sm" className="text-gray-300">
              13h-18h
            </Text>
          </div>

          <div className="flex flex-col items-center justify-between p-5">
            <div className="flex h-8 w-full flex-row items-center justify-between gap-0.5">
              <div className="flex flex-row items-center gap-5 text-gray-200">
                <Text variant="title-md">13:00</Text>
                <Text variant="text-md">Livia Curtis</Text>
              </div>
              <IconButton icon={TrashIcon} />
            </div>

            <div className="flex h-8 w-full flex-row items-center justify-between gap-0.5">
              <div className="flex flex-row items-center gap-5 text-gray-200">
                <Text variant="title-md">14:00</Text>
                <Text variant="text-md">Randy Calzoni</Text>
              </div>
              <IconButton icon={TrashIcon} />
            </div>

            <div className="flex h-8 w-full flex-row items-center justify-between gap-0.5">
              <div className="flex flex-row items-center gap-5 text-gray-200">
                <Text variant="title-md">16:00</Text>
                <Text variant="text-md">Marley Franci</Text>
              </div>
              <IconButton icon={TrashIcon} />
            </div>

            <div className="flex h-8 w-full flex-row items-center justify-between gap-0.5">
              <div className="flex flex-row items-center gap-5 text-gray-200">
                <Text variant="title-md">18:00</Text>
                <Text variant="text-md">Jaylon Korsgaard</Text>
              </div>
              <IconButton icon={TrashIcon} />
            </div>
          </div>
        </div>

        {/* Night appointments */}
        <div className="rounded-lg border border-gray-600">
          <div className="flex flex-row items-center justify-between border-gray-600 border-b px-5 py-3">
            <div className="flex flex-row items-center gap-3">
              <MoonStarsIcon
                className="h-5 w-5 text-yellow-dark"
                weight="bold"
              />
              <Text variant="text-sm" className="text-gray-300">
                Noite
              </Text>
            </div>
            <Text variant="text-sm" className="text-gray-300">
              19h-21h
            </Text>
          </div>

          <div className="flex flex-col items-center justify-between p-5">
            <div className="flex h-8 w-full flex-row items-center justify-between gap-0.5">
              <div className="flex flex-row items-center gap-5 text-gray-200">
                <Text variant="title-md">21:00</Text>
                <Text variant="text-md">Maria Herwitz</Text>
              </div>
              <IconButton icon={TrashIcon} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
