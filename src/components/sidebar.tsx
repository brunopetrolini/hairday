import { useState } from 'react';
import { DatePicker } from './ui/datepicker';

export function Sidebar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <aside className="bg-gray-700 rounded-xl max-w-[498px] w-full m-3 p-20">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl leading-6">Agende um atendimento</h1>
        <p className="text-gray-300 text-sm leading-5">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </p>
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col gap-8">
        {/* Date Section */}
        <div>
          <span className="font-bold leading-6 block mb-2">Data</span>
          <DatePicker
            initialDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        </div>
      </div>
    </aside>
  );
}
