# 🏋️‍♂️ Exercise Tracker Microservice

**Exercise Tracker** is a RESTful API built with **Node.js**, **Express**, and **MongoDB**. It was originally developed as part of a [FreeCodeCamp](https://www.freecodecamp.org/) backend certification test, but this version includes a custom **MVC folder structure** and integrated **Jest** testing suite.

> 📦 This microservice allows users to register, log exercises, and view historical workout data filtered by date or duration.

---

## 🚀 Features

- Create and store users
- Add new exercise logs for any user
- Retrieve full or filtered exercise logs by:
  - `from` and `to` date ranges
  - `limit` on number of results
- Modular folder structure (controllers/routes/views)
- `.env` support and automated testing

---

## 🧭 API Endpoints

| Method | Endpoint                    | Description                             |
| ------ | --------------------------- | --------------------------------------- |
| POST   | `/api/users`                | Create a new user                       |
| GET    | `/api/users`                | Retrieve all users                      |
| POST   | `/api/users/:_id/exercises` | Add an exercise to a user               |
| GET    | `/api/users/:_id/logs`      | View a user’s exercise log with filters |

---

## 📁 Folder Structure

```bash
Exercise_Tracker/
├── public/             # Static assets (if needed)
├── src/                # Express app logic
│   ├── routes/         # API route definitions
│   ├── controllers/    # Logic for request handling
│   └── db/             # MongoDB connection
├── views/              # HTML interface for root
├── .env                # Mongo URI and environment config
├── index.js            # Entry point
├── package.json
└── README.md
```

---

## Running the Project Locally

1. Clone and Install
   ```bash
   git clone # main repo
   cd Url-Shortener
   npm install
   ```
2. setup .env
   ```env
   MONGGO_URL=your_mongodb_connection_string
   NODE_ENV=development
   PORT=3003
   ```
3. Run in Development Mode
   ```
   npm run watch
   ```
   the app will run at
   ```
   http://localhost:3003/
   ```

## 🔍 Usage Instructions

- Go to /api/users and register a new user.
- Use the returned \_id to add exercises via /api/users/:\_id/exercises.
- Retrieve logs with /api/users/:\_id/logs?from=&to=&limit=.

## 🧪 Running Tests

To run the test suite:

1. Add this to your .env:
   ```
   NODE_ENV=test
   ```
2. Run:
   ```
   npm run test-watch
   ```

## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Jest (testing)
- Dotenv for environment config

## 🧠 What I Learned

- REST API design and routing
- Date handling and query parameter filtering
- Connecting and querying MongoDB with Mongoose
- Building MVC-style structure in Express
- Writing backend test cases using Jest

---

> “Building structured, testable, real-world APIs starts here — one rep at a time.”
