# AI Agent Instructions for code-connect

## Overview
**code-connect** is a full-stack monorepo with a **NestJS backend API** and **React frontend**, managed using **pnpm workspaces**. This file guides AI agents on project structure, commands, and conventions.

## Quick Start Commands

### Development
```bash
# Terminal 1: Start NestJS API (port 3000, watch mode)
pnpm dev:api

# Terminal 2: Start React web (port 5173, Vite HMR)
pnpm dev:web

# Run both in parallel
pnpm dev            # if available, else use two terminals above
```

### Building & Testing
```bash
pnpm build:api           # Compiles NestJS to apps/api/dist
pnpm build:web           # Builds React bundle to apps/web/dist

pnpm test:api            # Run API unit tests (Jest, watch mode)
pnpm test:e2e:api        # Run API E2E tests
pnpm lint:api            # ESLint + Prettier for API
```

### Project-Specific Commands
```bash
# Use --filter to target specific apps
pnpm --filter api start:dev     # Same as pnpm dev:api
pnpm --filter web dev           # Same as pnpm dev:web
```

## Project Structure

```
code-connect/
├── apps/
│   ├── api/              # NestJS backend (TypeScript 5.7.3, ESLint+Prettier)
│   │   ├── src/
│   │   │   ├── app.controller.ts    # HTTP endpoints
│   │   │   ├── app.service.ts       # Business logic
│   │   │   ├── app.module.ts        # Root module definition
│   │   │   └── main.ts              # Bootstrap entry point
│   │   ├── test/
│   │   │   ├── app.e2e-spec.ts     # Integration tests
│   │   │   └── jest-e2e.json
│   │   ├── tsconfig.json            # Target: ES2023, strict mode
│   │   ├── tsconfig.build.json      # Excludes test files
│   │   └── nest-cli.json            # NestJS generator config
│   │
│   └── web/              # React frontend (TypeScript 6.0.2, Oxlint)
│       ├── src/
│       │   ├── App.tsx               # Root component
│       │   ├── main.tsx              # Entry point
│       │   ├── App.css
│       │   ├── index.css
│       │   └── assets/               # Images, static resources
│       ├── public/                   # Static files
│       ├── index.html
│       ├── vite.config.ts            # Vite build config
│       └── tsconfig.json             # Strict mode enabled
│
├── Ícones/               # Shared UI assets (PNG, SVG icons)
├── pnpm-workspace.yaml   # Workspace configuration
└── package.json          # Root scripts
```

## Architecture & Conventions

### Backend (NestJS)
- **Pattern**: Controller-Service-Module hierarchy
- **Framework**: NestJS 11.0.1 with Express platform
- **TypeScript**: Target ES2023, strict mode enabled
- **Testing**: Jest with unit tests (`*.spec.ts`) and E2E tests (`*.e2e-spec.ts`)
- **Code Quality**: ESLint + Prettier
- **API Style**: RESTful API (strict adherence to REST principles)
- **Defaults**: Runs on `localhost:3000`

**REST Principles to Follow**:
- **HTTP Methods**: Use correct verbs (GET, POST, PUT/PATCH, DELETE)
  - GET: Retrieve resource(s) – must be idempotent & safe
  - POST: Create new resource – return 201 Created with Location header
  - PUT: Full update – idempotent, replace entire resource
  - PATCH: Partial update – idempotent
  - DELETE: Remove resource – idempotent
- **Status Codes**: 
  - 200 OK – Successful GET/PUT/PATCH
  - 201 Created – Successful POST
  - 204 No Content – Successful DELETE or empty response
  - 400 Bad Request – Invalid input
  - 401 Unauthorized – Authentication required
  - 403 Forbidden – Authenticated but not authorized
  - 404 Not Found – Resource doesn't exist
  - 409 Conflict – Conflict (duplicate key, etc.)
  - 500 Internal Server Error – Unhandled server error
- **Resource Naming**: Use nouns (not verbs), lowercase, plural
  - ✅ `/api/users`, `/api/posts`, `/api/comments`
  - ❌ `/api/getUsers`, `/api/createPost`, `/api/user/list`
- **URL Structure**: Resource hierarchy via path parameters
  - `GET /api/posts` – List all posts
  - `GET /api/posts/:id` – Get specific post
  - `GET /api/posts/:postId/comments` – Get comments for a post
  - `POST /api/posts/:postId/comments` – Create comment for a post
- **Query Parameters**: For filtering, pagination, sorting
  - `GET /api/posts?page=1&limit=10&sort=createdAt`
  - `GET /api/posts?status=published&author=userId123`
- **Request/Response Format**: JSON only
  - Request body for POST/PUT/PATCH
  - Response body with proper Content-Type: `application/json`
- **Error Responses**: Consistent format
  ```json
  {
    "statusCode": 400,
    "message": "Invalid input",
    "error": "Bad Request"
  }
  ```

**File Naming**:
- Controllers: `*.controller.ts`
- Services: `*.service.ts`
- Modules: `*.module.ts`
- Data Transfer Objects: `*.dto.ts`
- Unit tests: `*.spec.ts`
- Integration tests: `*.e2e-spec.ts`

### Frontend (React + Vite)
- **Framework**: React 19.2.7 with TypeScript 6.0.2
- **Build Tool**: Vite 8.1.1 (instant HMR)
- **Code Quality**: Oxlint (via `@vitejs/plugin-react`)
- **Design System**: Atomic Design + Tailwind CSS
- **Testing**: Component tests required for all components (use Vitest or Jest)
- **Defaults**: Runs on `localhost:5173`

**Atomic Design Structure**:
- `atoms/` – Basic building blocks (Button, Input, Badge, etc.)
- `molecules/` – Simple components combining atoms (SearchBar, FormGroup, etc.)
- `organisms/` – Complex components (Header, Footer, Navigation, etc.)
- `templates/` – Page layouts (no business logic)
- `pages/` – Full pages with business logic

**File Naming**:
- Components: `*.tsx` (one component per file, follow Atomic Design folder structure)
- Component tests: `*.test.tsx` (co-located with component)
- Utilities/logic: `*.ts`
- Styles: Use Tailwind CSS classes (no separate `*.css` for components)

### Shared
- **Package Manager**: pnpm 9.15.0
- **TypeScript**: Strict mode enabled in both apps
- **Build Outputs**: 
  - API: `apps/api/dist/`
  - Web: `apps/web/dist/`

## Important Context for AI Agents

### ⚠️ TypeScript Version Inconsistency
- **API**: TypeScript 5.7.3
- **Web**: TypeScript 6.0.2
- **Action**: Keep synchronized or explicitly note version differences when adding shared types.

### ⚠️ API-Web Integration Not Yet Configured
- Web has **no API client setup** (no axios/fetch configuration)
- No CORS headers configured on API
- When implementing frontend features that call the API, you'll need to:
  1. Add HTTP client (axios/fetch) to web app
  2. Configure CORS in NestJS API
  3. Set correct API URL (likely `http://localhost:3000` in dev)

### ⚠️ No Authentication/Authorization
- API has no auth modules installed
- Add `@nestjs/jwt` or similar if authentication is needed

### ⚠️ No Database Configured
- NestJS has no ORM/database packages
- Add TypeORM, Prisma, MongoDB, or similar as needed

### ⚠️ Web App Has No Tests
- Only API has Jest setup
- Consider adding Vitest or Jest to web app if test coverage is needed
- **Going forward**: All new components must have tests covering their essential use case

### ✅ Different Linters Per App
- **API**: ESLint with Prettier integration
- **Web**: Oxlint (modern, faster alternative)
- Use appropriate linting commands for each app

## Common Development Tasks

### Adding an API Endpoint
1. Add method to `apps/api/src/app.controller.ts`
2. Implement business logic in `apps/api/src/app.service.ts`
3. Register in `apps/api/src/app.module.ts` if needed
4. Run `pnpm dev:api` (auto-rebuilds on save)
5. Test with `pnpm test:api` or E2E tests

### Adding a React Component
1. Determine component level using Atomic Design:
   - **Atom**: Basic UI element (Button, Input, etc.) – single responsibility
   - **Molecule**: Combination of atoms (SearchBar, FormGroup, etc.)
   - **Organism**: Complex UI section (Header, Navigation, etc.)
   - **Template**: Page layout without business logic
   - **Page**: Full page with business logic and data fetching
2. Create component file in appropriate folder: `apps/web/src/{atoms|molecules|organisms|templates|pages}/`
3. Style using **Tailwind CSS** classes (no separate CSS files for components)
4. Create accompanying test file: `ComponentName.test.tsx`
   - Test must cover the component's essential use case(s)
   - Use Vitest or Jest
5. Import in parent component or `apps/web/src/App.tsx`
6. Run `pnpm dev:web` (Vite HMR instant updates)
7. Changes appear in browser automatically

**Example Atomic Design Structure**:
```
src/
├── atoms/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   ├── Input.tsx
│   └── Input.test.tsx
├── molecules/
│   ├── SearchBar.tsx
│   ├── SearchBar.test.tsx
│   ├── FormGroup.tsx
│   └── FormGroup.test.tsx
├── organisms/
│   ├── Header.tsx
│   ├── Header.test.tsx
│   ├── Footer.tsx
│   └── Footer.test.tsx
├── templates/
│   ├── MainLayout.tsx
│   └── MainLayout.test.tsx
└── pages/
    ├── HomePage.tsx
    ├── HomePage.test.tsx
    ├── UserPage.tsx
    └── UserPage.test.tsx
```

### Running Tests
```bash
pnpm test:api             # Unit + watch mode
pnpm test:e2e:api         # Integration tests
# Note: Web app has no tests configured yet
```

### Debugging
- **API**: Use `pnpm start:debug` (Node debugger on port 9229)
- **Web**: Use browser DevTools (Vite dev server includes source maps)

## Git & Version Control

### Conventional Commits
All commits across **both backend and frontend** must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

**Format**:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types**:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, semicolons, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding or updating tests
- `chore`: Changes to build process, dependencies, or tooling
- `ci`: Changes to CI/CD configuration

**Examples**:
```
feat(auth): add JWT authentication middleware
fix(api): resolve race condition in user creation
docs: update README with setup instructions
test(components): add Button component test coverage
refactor(web): extract common hooks to utils
chore(deps): update NestJS to 11.1.0
```

**Rules**:
- Use lowercase types
- Be specific with scope if applicable (e.g., `api`, `web`, `auth`, `components`)
- Description starts with lowercase, no period at end
- Keep description under 50 characters when possible
- Use imperative mood ("add" not "added" or "adds")
- Reference issues in footer: `Fixes #123` or `Closes #456`

**Example with body and footer**:
```
feat(api): add post pagination endpoint

Implement pagination query parameters for fetching posts list.
Supports page, limit, and sort parameters for flexible data retrieval.

Fixes #42
```

**Tooling** (optional but recommended):
- Consider installing `commitlint` to validate commit messages automatically
- Consider using `husky` to enforce Conventional Commits pre-commit hook
- [Backend README](apps/api/README.md) – API setup details
- [Frontend README](apps/web/README.md) – Web setup details

## Environment Notes
- **Default Ports**: API=3000, Web=5173
- **Build Outputs**: `apps/api/dist/` and `apps/web/dist/` (keep separate!)
- **Node Version**: Modern (ES2023 target) – use Node 18+
- **pnpm**: Required for workspace management (v9.15.0)

## When in Doubt
1. Check the relevant README (`apps/api/README.md` or `apps/web/README.md`)
2. Review the boilerplate code in `src/` to understand current patterns
3. Run `pnpm dev:api` and `pnpm dev:web` to see the app in action
4. Look at existing files (`app.controller.ts`, `App.tsx`) for style patterns
