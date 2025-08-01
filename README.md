# Backend Verification App

This Express.js app includes a `/api/health` endpoint that returns `{ status: "OK" }`. It's deployed to Railway and used to verify CI/CD updates via GitHub pushes.

## Run Locally

```bash
npm install
npm run dev
```

## Endpoint

GET `/api/health` → `{ "status": "OK" }`
