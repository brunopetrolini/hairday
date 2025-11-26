import { Appointments } from './components/appointments';
import { Sidebar } from './components/sidebar';
import { AppointmentsProvider } from './context/appointments-context';

export function App() {
  return (
    <AppointmentsProvider>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex h-full max-h-[900px] w-full max-w-[1440px] flex-row">
          <Sidebar />
          <Appointments />
        </div>
      </div>
    </AppointmentsProvider>
  );
}
