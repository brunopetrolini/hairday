// React Datepicker not working properly with Tailwind CSS styles
import {
  CalendarBlankIcon,
  CaretDownIcon,
  CaretUpIcon,
} from '@phosphor-icons/react';
import { ptBR } from 'date-fns/locale';
import { forwardRef, type HTMLProps, useState } from 'react';
import { DatePicker as ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { twMerge } from 'tailwind-merge';
import { Text } from '../text';
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
  const [isOpen, setIsOpen] = useState(false);

  const CustomInput = forwardRef<
    HTMLButtonElement,
    HTMLProps<HTMLButtonElement>
  >(({ value, onClick }, ref) => (
    <button
      type="button"
      ref={ref}
      className={twMerge(
        'flex h-12 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-gray-500 p-3 transition-colors duration-150',
        isOpen && 'border-yellow',
      )}
      onClick={onClick}
    >
      <CalendarBlankIcon className="h-5 w-5 text-yellow" weight="bold" />
      <Text variant="text-md" className="flex-1 text-start text-gray-200">
        {value}
      </Text>
      {!isOpen ? (
        <CaretDownIcon className="h-4 w-4 text-gray-300" weight="bold" />
      ) : (
        <CaretUpIcon className="h-4 w-4 text-gray-300" weight="bold" />
      )}
    </button>
  ));

  return (
    <div className="custom-datepicker">
      <ReactDatePicker
        customInput={<CustomInput />}
        minDate={new Date()}
        selected={selectedDate}
        disabled={disabled}
        onChange={onDateSelect}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        calendarStartDay={0}
        dateFormat="dd/MM/yyyy"
        locale={ptBR}
        wrapperClassName="w-full"
        calendarClassName="shadow-xl"
        popperClassName="datepicker-popper"
      />
    </div>
  );
}
