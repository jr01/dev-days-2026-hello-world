# Hello World

A minimal app with the same toolchain and folder layout as `nio-practice`.
Use it to check that your machine is ready for the workshop.

- `api/` — ASP.NET Core minimal API (.NET 10) with `GET /api/hello`.
- `api.tests/` — MSTest tests, including a CsCheck property test.
- `hello-web/` — Angular 22 app that calls the API and shows the result,
  tested with Vitest, including a fast-check property test.

## Prerequisites

| Tool | Version |
|------|---------|
| .NET SDK | 10.0.100 or newer 10.0.x (pinned in `global.json`; tested with 10.0.302) |
| Node.js | ^22.22.3, ^24.15.0 or >=26.0.0 (tested with 24.16.0) |
| npm | 10 or newer (tested with 11.13.0) |

## Backend

```bash
dotnet restore
dotnet build
dotnet test
```

```bash
cd api
dotnet run
```

The API listens on http://localhost:5000. Try
http://localhost:5000/api/hello or http://localhost:5000/api/hello?name=Ada.

## Frontend

```bash
cd hello-web
npm ci
npm test
npm run build
npm start
```

`npm start` serves the app on http://localhost:4200 and proxies `/api` to
http://localhost:5000, so start the backend first. The page should show
"Hello, World!".
