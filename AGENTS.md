# Repository Guidelines

## Project Structure & Module Organization

This is a Node.js Express API backed by MongoDB/Mongoose. The entry point is `index.js`, which configures middleware, connects to MongoDB, and mounts route modules.

- `server/routes/`: Express route definitions grouped by feature.
- `server/controllers/`: Request handlers and response logic.
- `server/models/`: Mongoose schemas and model exports.
- `services/`: Data-access and business logic helpers used by controllers.
- `helpers/` and `utils/`: Shared response, message, constant, and utility functions.
- `uploads/`: Local uploaded image files. Do not commit new runtime uploads unless they are intentional fixtures.

## Build, Test, and Development Commands

- `npm install`: Install dependencies from `package-lock.json`.
- `npm run start:dev`: Start the API with `nodemon` and `babel-node` for local development.
- `npm run start:production`: Start the API with plain Node using `index.js`.
- `npm test`: Currently exits with "no test specified"; add a real test runner before relying on it in CI.

The app expects MongoDB configuration in `.env`. Keep local values out of committed source.

## Coding Style & Naming Conventions

Use CommonJS modules (`require`, `module.exports`) to match the existing code. Follow the current feature naming pattern: snake_case filenames such as `recipe_controller.js`, `recipe_schema.js`, and `recipe_service.js`. Keep route, controller, service, and model files separated by responsibility.

ESLint is configured with `eslint:recommended` in `.eslintrc.js`. Use two-space indentation where touching existing root files and preserve nearby style when editing older modules. Prefer descriptive variable names and consistent response shapes (`success`, `data`, `message`, `error`).

## Testing Guidelines

No test framework is currently wired into `package.json`. When adding tests, place them near the code they cover or under a dedicated `tests/` directory, and name files by feature, for example `recipe_controller.test.js`. Cover controller success paths, auth failures, validation errors, and service/database behavior with mocked Mongoose calls where practical.

## Commit & Pull Request Guidelines

Recent commits use short, lowercase, hyphenated summaries such as `server-set-up`, `env-setup`, and `deploy-changes`. Keep commits focused and use concise imperative messages.

Pull requests should include a short description, affected endpoints or modules, setup/config changes, and manual test evidence such as example requests or responses. Link related issues when available and include screenshots only for user-visible upload or asset behavior.

## Security & Configuration Tips

Never hard-code database credentials, JWT secrets, or Cloudinary keys. Store secrets in `.env`, document required variable names, and ensure `.gitignore` excludes local environment files and generated uploads.
