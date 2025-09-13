# GiftLink Capstone (Scaffold)

This repository is a ready-to-use scaffold for the GiftLink capstone project (backend + frontend).
It includes sample implementations of routes and components required by the course tasks and
a short guide to install, run, containerize, and deploy locally.

## Structure
See `project-structure.txt` for a quick tree.

## Quick start (local)
### Backend
1. `cd giftlink-backend`
2. Create `.env` with `MONGODB_URI` and `PORT` (example in `.env.example`)
3. `npm install`
4. `npm run dev` (starts backend on PORT)

### Frontend
1. `cd giftlink-frontend`
2. `npm install`
3. `npm start` (starts React dev server on http://localhost:3000)

### Docker (example)
- Backend Dockerfile provided. Build & run with:
  ```
  docker build -t giftlink-backend ./giftlink-backend
  docker run -e MONGODB_URI="<your uri>" -p 5000:5000 giftlink-backend
  ```

## CI/CD
A sample GitHub Actions workflow is included at `.github/workflows/ci-cd.yml`.

## Notes
Files included to satisfy course tasks: 
- `.github/ISSUE_TEMPLATE/user-story.md`
- `giftlink-backend/models/db.js` (contains `await client.connect()`)
- `giftlink-backend/routes/giftRoutes.js` (uses `connectToDatabase()` and defines routes `/api/gifts` and `/api/gifts/:id`)
- `giftlink-backend/routes/searchRoutes.js` (filters by category)
- `giftlink-backend/sentiment/index.js` (imports `natural`)
- `giftlink-frontend/src/components/RegisterPage/RegisterPage.js` (fetch with method & headers)
- `giftlink-frontend/src/components/LoginPage/LoginPage.js` (fetch with content-type & Authorization)

If you want, I can further populate the frontend with styling, or seed a MongoDB dump for the 16 documents.
