import { Appointments } from './components/appointments';
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-full max-h-[900px] w-full max-w-[1440px] flex-row">
        <Sidebar />
        <Appointments />
      </div>
    </div>
  );
}
