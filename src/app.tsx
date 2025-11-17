import { Appointments } from './components/appointments';
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[1440px] max-h-[900px] w-full h-full flex flex-row">
        <Sidebar />
        <Appointments />
      </div>
    </div>
  );
}
