import { UserSquareIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { DatePicker } from './ui/datepicker';
import { Text } from './ui/text';

export function Sidebar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

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
          />
        </div>

        {/* Time Section */}
        <div className="flex flex-col gap-2">
          <span className="font-bold leading-6">Horários</span>

          {/* Morning Slot */}
          <div className="flex flex-col gap-3">
            <span className="text-gray-300 text-sm leading-5">Manhã</span>
            <div className="grid grid-cols-4 gap-2">
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                09:00
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                10:00
              </button>
              <button
                disabled
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                11:00
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                12:00
              </button>
            </div>
          </div>

          {/* Afternoon Slot */}
          <div className="flex flex-col gap-3">
            <span className="text-gray-300 text-sm leading-5">Tarde</span>
            <div className="grid grid-cols-4 gap-2">
              <button
                disabled
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                13:00
              </button>
              <button
                disabled
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                14:00
              </button>
              <button
                disabled
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                15:00
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                16:00
              </button>
              <button
                disabled
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                17:00
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                18:00
              </button>
            </div>
          </div>

          {/* Night Slot */}
          <div className="flex flex-col gap-3">
            <span className="text-gray-300 text-sm leading-5">Noite</span>
            <div className="grid grid-cols-4 gap-2">
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                19:00
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                20:00
              </button>
              <button
                disabled
                type="button"
                className="cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 transition-colors duration-150 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-600"
              >
                21:00
              </button>
            </div>
          </div>
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

        <button
          type="button"
          className="h-14 rounded-lg bg-yellow font-bold text-gray-900 text-sm leading-5"
        >
          AGENDAR
        </button>
      </div>
    </aside>
  );
}
