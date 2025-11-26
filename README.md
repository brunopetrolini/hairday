# ✂️ HairDay

Sistema de agendamento para barbearias desenvolvido com React e TypeScript.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)

## 📋 Sobre o Projeto

HairDay é uma aplicação web para gerenciamento de agendamentos de cortes de cabelo. Com uma interface intuitiva, permite que barbeiros visualizem e gerenciem seus horários de forma eficiente.

### Funcionalidades

- 📅 **Seleção de data** - Navegue por diferentes dias para ver ou criar agendamentos
- ⏰ **Horários organizados por turno** - Manhã, tarde e noite
- ➕ **Criação de agendamentos** - Agende novos clientes com nome e horário
- 🗑️ **Remoção de agendamentos** - Cancele agendamentos quando necessário
- 💾 **Persistência local** - Os dados são salvos no localStorage do navegador

## 🚀 Tecnologias

- [React 19](https://react.dev/) - Biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Vite](https://vitejs.dev/) - Build tool e dev server
- [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS utilitário
- [Tailwind Variants](https://www.tailwind-variants.org/) - Variantes de componentes
- [date-fns](https://date-fns.org/) - Utilitários para manipulação de datas
- [React DatePicker](https://reactdatepicker.com/) - Componente de seleção de data
- [Phosphor Icons](https://phosphoricons.com/) - Biblioteca de ícones
- [Biome](https://biomejs.dev/) - Linter e formatter

## 📦 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/brunopetrolini/hairday.git
cd hairday
```

2. Instale as dependências:

```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

4. Acesse a aplicação em [http://localhost:5173](http://localhost:5173)

## 📜 Scripts Disponíveis

| Comando        | Descrição                              |
| -------------- | -------------------------------------- |
| `pnpm dev`     | Inicia o servidor de desenvolvimento   |
| `pnpm build`   | Gera a build de produção               |
| `pnpm preview` | Visualiza a build de produção localmente |
| `pnpm format`  | Formata o código com Biome             |

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/              # Componentes de UI reutilizáveis
│   │   ├── button.tsx
│   │   ├── icon-button.tsx
│   │   ├── text.tsx
│   │   └── datepicker/
│   ├── appointments.tsx
│   ├── appointment-list.tsx
│   ├── sidebar.tsx
│   └── time-slots.tsx
├── context/             # Contextos React
│   └── appointments-context.tsx
├── hooks/               # Hooks customizados
│   └── use-local-storage.ts
├── app.tsx              # Componente principal
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🎨 Preview

A aplicação possui duas áreas principais:

- **Sidebar (esquerda)**: Formulário para criar novos agendamentos com seleção de data, horário e nome do cliente
- **Área principal (direita)**: Lista de agendamentos do dia selecionado, organizados por turno (manhã, tarde, noite)

## 📄 Licença

Este projeto foi desenvolvido como parte de um estudo/curso da [Rocketseat](https://rocketseat.com.br/).

---

Feito com 💜 por [Bruno Petrolini](https://github.com/brunopetrolini)
