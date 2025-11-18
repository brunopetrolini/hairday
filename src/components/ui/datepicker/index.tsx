import { CalendarBlankIcon } from '@phosphor-icons/react';
import { ptBR } from 'date-fns/locale';
import { DatePicker as ReactDatePicker } from 'react-datepicker';

// React Datepicker not working properly with Tailwind CSS styles
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-custom.css';

interface DatePickerProps {
  initialDate: Date | null;
  onDateSelect: (date: Date | null) => void;
  disabled?: boolean;
}

export function DatePicker({
  initialDate,
  onDateSelect,
  disabled,
}: DatePickerProps) {
  return (
    <div className="custom-datepicker">
      <ReactDatePicker
        showIcon
        icon={
          <CalendarBlankIcon className="h-5 w-5 text-yellow" weight="bold" />
        }
        disabled={disabled}
        selected={initialDate}
        onChange={onDateSelect}
        calendarStartDay={0}
        dateFormat="dd/MM/yyyy"
        locale={ptBR}
        className="w-full h-12 text-gray-200 rounded-lg pl-12 pr-4 py-3 border border-gray-500 focus:border-yellow focus:outline-none cursor-pointer disabled:cursor-not-allowed"
        wrapperClassName="w-full"
        calendarClassName="shadow-xl"
        popperClassName="datepicker-popper"
      />
    </div>
  );
}
