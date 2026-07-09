<img width="2214" height="1274" alt="image" src="https://github.com/user-attachments/assets/55275e02-49b2-4971-a1d4-b007430fd93e" />


# EdgeUno MCP Playground

**OpenAPI → MCP Explorer** — uma interface para explorar endpoints OpenAPI da EdgeUno (provedor de VPS/hospedagem) expostos como ferramentas MCP (Model Context Protocol), testá-los em um playground conversacional com um agente de IA e acompanhar métricas e logs de execução.

O projeto é dividido em dois pacotes, cada um em sua própria pasta:

```
edgeuno/
├── backend/    # API Express + agente de IA (OpenRouter)
└── frontend/   # SPA React (este README)
```

Para rodar o projeto completo você precisa iniciar **os dois** — veja [Como rodar o projeto completo](#como-rodar-o-projeto-completo).

## Funcionalidades

- **Dashboard** — visão geral com ferramentas disponíveis, execuções recentes e fluxo de trabalho.
- **API Explorer** — navega pelas ferramentas derivadas da especificação OpenAPI (endpoint, método, parâmetros) e permite executá-las individualmente.
- **AI Playground** — chat com um agente que decide quando invocar ferramentas, exibindo a timeline de execução e a resposta JSON de cada chamada.
- **Metrics** — taxa de sucesso, latência e ferramentas mais utilizadas.
- **Logs** — tabela de execuções com filtros, persistida em `localStorage`.

## Pré-requisitos

- Node.js 20+
- [Yarn 4 (Berry)](https://yarnpkg.com/) — tanto `frontend/` quanto `backend/` já estão configurados com `yarn.lock`
- Uma chave de API do [OpenRouter](https://openrouter.ai/) (usada pelo backend para o agente de IA)

## Como rodar o projeto completo

Abra dois terminais (um para o backend, outro para o frontend) — os dois processos precisam ficar rodando ao mesmo tempo.

**Terminal 1 — Backend**

```bash
cd backend
yarn install
cp .env.example .env   # depois edite .env e preencha OPENROUTER_API_KEY
yarn dev
```

A API sobe em [http://localhost:3001](http://localhost:3001) (porta configurável via `PORT` no `.env`).

**Terminal 2 — Frontend**

```bash
cd frontend
yarn install
yarn dev
```

O frontend sobe em [http://localhost:5173](http://localhost:5173) e já está configurado para chamar o backend em `http://localhost:3001/api` (ver `src/services/api/client.ts`).

> Se o backend não estiver rodando, ou `OPENROUTER_API_KEY` estiver ausente/inválida, as chamadas às páginas Dashboard, Explorer e Playground vão falhar (o agente de IA depende do OpenRouter).

## Backend

API REST em Express + TypeScript, responsável por:

- Expor os dados mockados de produtos, recursos, pedidos e ferramentas.
- Rodar o agente de IA (`ToolAgent`) que interpreta um prompt em linguagem natural, decide qual ferramenta chamar via um modelo da OpenRouter e executa a ferramenta correspondente.

### Stack

- [Express 5](https://expressjs.com/) + [TypeScript](https://www.typescriptlang.org/)
- [openai SDK](https://github.com/openai/openai-node) apontando para a [OpenRouter](https://openrouter.ai/) (`baseURL: https://openrouter.ai/api/v1`)
- [tsx](https://github.com/privatenumber/tsx) para dev com hot reload
- [cors](https://www.npmjs.com/package/cors) + [dotenv](https://www.npmjs.com/package/dotenv)

### Estrutura do projeto

```
src/
├── ai/agent/       # ToolAgent: prompt → decisão de ferramenta → execução
│   ├── providers/  # cliente OpenRouter
│   ├── prompts/    # system prompt do agente
│   └── services/   # parsing da decisão, execução da ferramenta, resposta ao usuário
├── controllers/    # handlers das rotas Express
├── routes/         # definição das rotas por recurso
├── mocks/          # dados e serviços mockados (products, resources, orders, tools, auth)
├── types/          # tipos compartilhados (ex: ApiResponse)
└── utils/          # helpers (ex: successResponse/errorResponse)
```

### Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

| Variável             | Obrigatória | Descrição                                                          |
| -------------------- | ----------- | -------------------------------------------------------------------- |
| `OPENROUTER_API_KEY` | Sim         | Chave da conta OpenRouter usada pelo agente de IA para chamar o LLM. |
| `PORT`               | Não         | Porta do servidor Express. Padrão: `3001`.                           |

### Scripts

```bash
yarn dev     # inicia com hot reload (tsx watch)
yarn build   # compila TypeScript para dist/
yarn start   # roda o build de produção (node dist/server.js)
```

### Rotas expostas

Base URL: `http://localhost:3001/api`

| Método | Rota          | Descrição                                                  |
| ------ | ------------- | ----------------------------------------------------------- |
| GET    | `/products`   | Lista os produtos disponíveis.                              |
| GET    | `/resources`  | Lista os recursos (VPS) provisionados.                      |
| GET    | `/orders`     | Lista o status dos pedidos.                                 |
| GET    | `/tools`      | Lista as ferramentas MCP registradas.                       |
| POST   | `/ai/chat`    | Envia um prompt (`{ "prompt": "..." }`) para o agente de IA. |

## Frontend

### Funcionalidades

Ver seção [Funcionalidades](#funcionalidades) no topo — este pacote implementa toda a interface.

### Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (estilo `base-nova`) sobre [Base UI](https://base-ui.com/)
- [TanStack Query](https://tanstack.com/query) para dados assíncronos
- [Zustand](https://zustand-demo.pmnd.rs/) (com persistência em `localStorage`) para estado global
- [React Router v7](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) para formulários e validação
- [Axios](https://axios-http.com/)

### Estrutura do projeto

```
src/
├── app/            # bootstrap da aplicação (App, Providers)
├── components/     # componentes compartilhados (layout, cards, dashboard, ui/shadcn)
├── features/       # lógica por domínio (explorer, playground, metrics, logs)
├── pages/          # páginas de rota (Dashboard, Explorer, Playground, Metrics, Log)
├── routes/         # configuração de rotas (react-router-dom)
├── services/       # cliente HTTP (axios) e hooks de dados (TanStack Query) para a API real
├── store/          # stores Zustand (logs, metrics, resources)
├── mocks/          # dados e handlers mockados usados pelo API Explorer
└── lib/            # utilitários
```

> O **AI Playground** e o card "Available Tools" do Dashboard consomem a API real do backend (`src/services/`). O **API Explorer** executa contra dados mockados localmente (`src/mocks/`), sem depender do backend estar rodando — e é o que alimenta os logs (persistidos em `localStorage`) usados pelas páginas **Metrics** e **Logs**, e pelo card "Recent Executions" do Dashboard.

### Scripts

```bash
yarn install   # instalar dependências
yarn dev       # servidor de desenvolvimento em http://localhost:5173
yarn build     # gerar build de produção
yarn preview   # pré-visualizar o build
yarn lint      # rodar o lint
```

### Adicionando componentes shadcn

O projeto usa o CLI do shadcn (configurado em `components.json`, estilo `base-nova`, ícones `lucide`):

```bash
yarn dlx shadcn@latest add <component>
```
