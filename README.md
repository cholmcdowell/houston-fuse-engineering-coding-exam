# Team Directory - Take-Home Project

Welcome! This project evaluates your ability to work with React, TypeScript, and REST APIs—skills you'll use daily in this role.

## Time Expectation

This project should take **1.5 to 2 hours**. Please don't spend more than 2.5 hours—we respect your time. Submit what you have even if incomplete.

## The Scenario

You're joining a team that maintains an internal Team Directory application. The backend API is already built and deployed (running locally via Docker). Your job is to build the frontend that consumes it.

---

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 18+
- VS Code (recommended)

### Setup (VS Code - Recommended)

1. Open the project folder in VS Code

2. Install frontend dependencies (first time only):
   ```bash
   cd frontend
   npm install
   ```

3. Press `F5` or go to **Run and Debug** panel and select:
   - **"Full Stack (API + Frontend)"** — starts everything
   
   This will:
   - Start the API in Docker
   - Start the frontend dev server with hot reload
   - Open Chrome with debugger attached

4. Set breakpoints in your TypeScript code and debug!

### Setup (Docker Only - Alternative)

If you prefer to run everything in Docker:

```bash
docker compose up
```

Then open http://localhost:5173 in your browser.

### Development Workflow

- Edit files in `frontend/src/` — changes hot-reload automatically
- Set breakpoints in VS Code for debugging
- Edit the Lambda in `backend/lambdas/` — restart the API to see changes:
  ```bash
  docker compose restart api
  ```

---

## Your Tasks

### Task 1: Build the Team List Component

Create a `TeamList` component that:

- Fetches team members from `GET http://localhost:3001/team`
- Displays each team member showing their name, role, department, and email
- Shows a loading state while fetching
- Shows an error state if the request fails

### Task 2: Add Filtering

Add a text input that filters the displayed team members by name (client-side filtering is fine).

### Task 3: Add Department Filter

Add a dropdown that filters team members by department. The departments are: Engineering, Design, Product, Marketing.

---

## Bonus Task (Optional)

The backend Lambda function currently returns all team members. Modify it to support a `limit` query parameter.

**Example:** `GET /team?limit=5` should return only the first 5 team members.

The Lambda code is located at: `backend/lambdas/getTeam/index.js`

After modifying, restart the API container:
```bash
docker compose restart api
```

---

## API Reference

### GET /team

Returns all team members.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Alice Chen",
      "email": "alice.chen@company.com",
      "role": "Senior Engineer",
      "department": "Engineering",
      "startDate": "2022-03-15"
    }
  ]
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message here"
}
```

---

## What We're Looking For

| Area | What We Evaluate |
|------|------------------|
| TypeScript | Proper typing, avoiding `any` |
| React | Clean component structure, appropriate hooks usage |
| User Experience | Loading states, error handling, usable UI |
| Code Quality | Readable, maintainable code |

We're **not** evaluating:
- Visual design or CSS polish (basic styling is fine)
- Test coverage (nice to have but not required)
- Perfect code (we want to see how you think)

---

## Submission

1. Ensure your code runs with the steps in "Getting Started"
2. Zip the entire project directory
3. Email to [HIRING_EMAIL] with subject: "Take-Home Submission - [Your Name]"

Include a brief note about:
- Any decisions you made and why
- What you'd improve with more time
- Any questions or assumptions you made

---

## Questions?

If anything is unclear, email tate.walker@versent.com.au. We're happy to clarify—asking questions is not penalized.

Good luck! 🚀
