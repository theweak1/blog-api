# 🛠️ Blog API

<!--
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-100%25-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-95%25-yellowgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
-->

A backend-first project scaffolded in TypeScript with Express, built with simplicity and testability in mind. This project currently uses a `db.json` file as a mock database (via `fs`) and is structured to evolve into a full-stack application.

---

## 🚀 Features

- ✅ TypeScript support
- ✅ Modular folder structure (`routes`, `controllers`, `services`, etc.)
- ✅ Mock database powered by `db.json` and file system
- ✅ Full CRUD support for blog posts
- ✅ Unit & integration tests (Jest + Supertest)
- ✅ Custom error handling and logging with Winston

---

## ⚙️ Tech Stack

- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Testing**: [Jest](https://jestjs.io/) + [Supertest](https://github.com/visionmedia/supertest)
- **Logging**: [Winston](https://github.com/winstonjs/winston)
- **Linting/Formatting**: ESLint + Prettier
- **Mock DB**: JSON file system (via Node `fs`)

---

## 📁 Project Structure

```bash
src/
├── config/           # App configuration
├── controllers/      # Express route controllers
├── errors/           # Custom error classes
├── logger/           # Winston logger setup
├── middleware/       # Express middleware (e.g., error handlers, morgan)
├── routes/           # API routes
│   └── v1/           # Versioned routes
├── scripts/          # Utility scripts (e.g., seed)
├── services/         # Business logic
├── utils/            # Reusable utilities
└── tests/            # Unit and integration tests
```

---

## 📦 Install & Run

```bash
git clone https://github.com/theweak1/blog-api.git
cd blog-api
npm install
cp .env.example .env  # Copy the example environment file
npm run dev
```

---

## 🧪 Running Tests

```bash
npm run test          # Run all tests
npm run test:watch    # Watch files and re-run tests
npm run test:coverage # Run tests with coverage report
```

---

## 💡 Script Descriptions

| Script        | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| dev           | Run the development server using ts-node with dotenv and path alias support |
| test          | Run all unit and integration tests using Jest                               |
| test:watch    | Watch files and automatically re-run tests when changes are detected        |
| test:coverage | Generate a code coverage report with Jest                                   |
| lint          | Lint the project using ESLint to catch style and code issues                |
| lint:fix      | Automatically fix fixable ESLint issues                                     |
| db:seed       | Populate the mock database (`db.json`) with fake data using the seed script |
| build         | Transpile TypeScript source files into the `dist/` directory                |
| start         | Run the production build from the `dist/` directory                         |

---

## 🌱 Seed the Database

```bash
npm run db:seed
```

This populates the mock database (`db.json`) with sample blog posts using `@faker-js/faker`.

---

## 🔐 Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
LOG_LEVEL=info
```

You can expand this as the project grows (e.g., for DB connection strings, JWT secrets, etc.)

---

## 📈 Roadmap

- [x] Setup Express with TypeScript
- [x] Add basic blog CRUD routes
- [x] Add tests (Jest + Supertest)
- [ ] Integrate real database (e.g., PostgreSQL, Prisma)
- [ ] Add user authentication (JWT)
- [ ] Build a frontend (React/Vite)
- [ ] Deploy full stack app (Render/Vercel/Netlify + Railway/Fly.io/etc.)

---

## ❤️ A Note from the Author

_\"It may not have a lot of users... but one can dream.\"_ ✨

---

## 📄 License

MIT
