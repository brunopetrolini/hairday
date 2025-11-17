export function Sidebar() {
  return (
    <aside className="bg-gray-700 rounded-xl max-w-[498px] w-full m-3 p-20">
      {/* Header */}
      <h1 className="font-bold text-2xl leading-6">Agende um atendimento</h1>
      <p className="text-gray-300 text-sm leading-5 mt-1">
        Selecione data, horário e informe o nome do cliente para criar o
        agendamento
      </p>
    </aside>
  );
}
