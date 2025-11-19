import { CalendarBlankIcon } from '@phosphor-icons/react';
import { ptBR } from 'date-fns/locale';
import { DatePicker as ReactDatePicker } from 'react-datepicker';

// React Datepicker not working properly with Tailwind CSS styles
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-custom.css';

interface DatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date | null) => void;
  disabled?: boolean;
}

export function DatePicker({
  selectedDate,
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
        minDate={new Date()}
        selected={selectedDate}
        disabled={disabled}
        onChange={onDateSelect}
        calendarStartDay={0}
        dateFormat="dd/MM/yyyy"
        locale={ptBR}
        className="h-12 w-full cursor-pointer rounded-lg border border-gray-500 py-3 pr-4 pl-12 text-gray-200 focus:border-yellow focus:outline-none disabled:cursor-not-allowed"
        wrapperClassName="w-full"
        calendarClassName="shadow-xl"
        popperClassName="datepicker-popper"
      />
    </div>
  );
}
