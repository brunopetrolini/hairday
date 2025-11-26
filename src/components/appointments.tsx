import { useMemo, useState } from 'react';
import { type Appointment, AppointmentList } from './appointment-list';
import { DatePicker } from './ui/datepicker';
import { Text } from './ui/text';

export function Appointments() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: '1', time: '09:00', clientName: 'Ryan Dorwart', turn: 'morning' },
    { id: '2', time: '13:00', clientName: 'Livia Curtis', turn: 'afternoon' },
    { id: '3', time: '14:00', clientName: 'Randy Calzoni', turn: 'afternoon' },
    { id: '4', time: '16:00', clientName: 'Marley Franci', turn: 'afternoon' },
    {
      id: '5',
      time: '18:00',
      clientName: 'Jaylon Korsgaard',
      turn: 'afternoon',
    },
    { id: '6', time: '21:00', clientName: 'Maria Herwitz', turn: 'night' },
  ]);

  const morningAppointments = useMemo(
    () => appointments.filter((appointment) => appointment.turn === 'morning'),
    [appointments],
  );

  const afternoonAppointments = useMemo(
    () =>
      appointments.filter((appointment) => appointment.turn === 'afternoon'),
    [appointments],
  );

  const nightAppointments = useMemo(
    () => appointments.filter((appointment) => appointment.turn === 'night'),
    [appointments],
  );

  function handleDeleteAppointment(id: string) {
    setAppointments((state) =>
      state.filter((appointment) => appointment.id !== id),
    );
  }

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
        <AppointmentList.Container>
          <AppointmentList.Header turn="morning" />
          <AppointmentList.List>
            {morningAppointments.length > 0 ? (
              morningAppointments.map((appointment) => (
                <AppointmentList.Item
                  key={appointment.id}
                  appointment={appointment}
                  onDelete={() => handleDeleteAppointment(appointment.id)}
                />
              ))
            ) : (
              <Text
                variant="text-sm"
                className="w-full text-start text-gray-400"
              >
                Nenhum agendamento para esse período.
              </Text>
            )}
          </AppointmentList.List>
        </AppointmentList.Container>

        {/* Afternoon appointments */}
        <AppointmentList.Container>
          <AppointmentList.Header turn="afternoon" />
          <AppointmentList.List>
            {afternoonAppointments.length > 0 ? (
              afternoonAppointments.map((appointment) => (
                <AppointmentList.Item
                  key={appointment.id}
                  appointment={appointment}
                  onDelete={() => handleDeleteAppointment(appointment.id)}
                />
              ))
            ) : (
              <Text
                variant="text-sm"
                className="w-full text-start text-gray-400"
              >
                Nenhum agendamento para esse período.
              </Text>
            )}
          </AppointmentList.List>
        </AppointmentList.Container>

        {/* Night appointments */}
        <AppointmentList.Container>
          <AppointmentList.Header turn="night" />
          <AppointmentList.List>
            {nightAppointments.length > 0 ? (
              nightAppointments.map((appointment) => (
                <AppointmentList.Item
                  key={appointment.id}
                  appointment={appointment}
                  onDelete={() => handleDeleteAppointment(appointment.id)}
                />
              ))
            ) : (
              <Text
                variant="text-sm"
                className="w-full text-start text-gray-400"
              >
                Nenhum agendamento para esse período.
              </Text>
            )}
          </AppointmentList.List>
        </AppointmentList.Container>
      </div>
    </main>
  );
}
