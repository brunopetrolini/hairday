import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

type Turn = 'morning' | 'afternoon' | 'night';

export type Appointment = {
  id: string;
  date: string;
  time: string;
  clientName: string;
  turn: Turn;
};

interface AppointmentsContextData {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'turn'>) => void;
  removeAppointment: (id: string) => void;
  getAppointmentsByDate: (date: string) => Appointment[];
  getBookedTimesByDate: (date: string) => string[];
}

const AppointmentsContext = createContext<AppointmentsContextData | null>(null);

const STORAGE_KEY = 'hairday:appointments';

function getTurnFromTime(time: string): Turn {
  const hour = Number.parseInt(time.split(':')[0], 10);
  if (hour >= 9 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  return 'night';
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

interface AppointmentsProviderProps {
  children: ReactNode;
}

export function AppointmentsProvider({ children }: AppointmentsProviderProps) {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    STORAGE_KEY,
    [],
  );

  const addAppointment = useCallback(
    (appointmentData: Omit<Appointment, 'id' | 'turn'>) => {
      const newAppointment: Appointment = {
        ...appointmentData,
        id: generateId(),
        turn: getTurnFromTime(appointmentData.time),
      };

      setAppointments((prev) => [...prev, newAppointment]);
    },
    [setAppointments],
  );

  const removeAppointment = useCallback(
    (id: string) => {
      setAppointments((prev) =>
        prev.filter((appointment) => appointment.id !== id),
      );
    },
    [setAppointments],
  );

  const getAppointmentsByDate = useCallback(
    (date: string) => {
      return appointments.filter((appointment) => appointment.date === date);
    },
    [appointments],
  );

  const getBookedTimesByDate = useCallback(
    (date: string) => {
      return appointments
        .filter((appointment) => appointment.date === date)
        .map((appointment) => appointment.time);
    },
    [appointments],
  );

  const value = useMemo(
    () => ({
      appointments,
      addAppointment,
      removeAppointment,
      getAppointmentsByDate,
      getBookedTimesByDate,
    }),
    [
      appointments,
      addAppointment,
      removeAppointment,
      getAppointmentsByDate,
      getBookedTimesByDate,
    ],
  );

  return (
    <AppointmentsContext.Provider value={value}>
      {children}
    </AppointmentsContext.Provider>
  );
}

export function useAppointments(): AppointmentsContextData {
  const context = useContext(AppointmentsContext);

  if (!context) {
    throw new Error(
      'useAppointments must be used within an AppointmentsProvider',
    );
  }

  return context;
}
