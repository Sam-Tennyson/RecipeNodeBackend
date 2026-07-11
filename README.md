# Recipe Node Backend

Express and MongoDB backend for a recipe application. The API supports user registration/login, recipe CRUD operations, recipe comments, and supporting upload/category modules.

## Tech Stack

- Node.js and Express
- MongoDB with Mongoose
- JWT authentication
- Multer and Cloudinary-related upload configuration
- Nodemon and Babel for local development

## Project Structure

```text
index.js                  # App entry point, middleware, database connection, mounted routes
server/routes/            # Express route definitions
server/controllers/        # Request handlers
server/models/             # Mongoose schemas and models
services/                  # Data and business logic helpers
helpers/                   # Shared response helpers
utils/                     # Constants, messages, and common utilities
uploads/                   # Local uploaded image files
```

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Update `.env` with your local values:

```env
MONGODB="mongodb://127.0.0.1:27017/recipeApp"
MONGO_URL="mongodb://127.0.0.1:27017/recipeApp"
PORT="5000"
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

Note: `index.js` currently checks for `MONGODB` but connects with `MONGO_URL` when present, so define both until the configuration is normalized.

## Available Scripts

```bash
npm run start:dev
```

Starts the API with `nodemon` and `babel-node`.

```bash
npm run start:production
```

Starts the API with plain Node.

```bash
npm test
```

Currently returns `Error: no test specified`; add a test runner before using this in CI.

## API Routes

Mounted routes:

- `POST /auth/signup` - register a user
- `POST /auth/login` - log in a user
- `POST /recipe/add-recipe` - create a recipe
- `POST /recipe/get-recipe` - list recipes
- `GET /recipe/get-recipe/:id` - fetch one recipe
- `PUT /recipe/update-recipe/:id` - update a recipe
- `DELETE /recipe/get-recipe/:id` - delete a recipe
- `POST /recipe-comment/make-comment` - add a recipe comment
- `GET /recipe-comment/make-comment/:id` - fetch comments for a recipe

Category and image upload route files exist under `server/routes/`, but they are not currently mounted in `index.js`.

## Development Notes

Use CommonJS imports/exports to match the existing codebase. Keep feature files split across routes, controllers, models, and services. Do not commit real secrets or database credentials; keep them in `.env`.
