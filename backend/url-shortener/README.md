# 🔗 URL Shortener Microservice

**Url-Shortener** is a RESTful microservice API built using **Node.js**, **Express**, and **MongoDB**, inspired by a FreeCodeCamp backend project. This version introduces a clean **MVC folder structure**, `.env` configuration support, and automated tests using **Jest**.

> 📦 Designed to convert long URLs into short links and retrieve them efficiently via MongoDB.

---

## 🚀 Features

- Accepts long URLs and returns a shortened version
- Stores shortened URLs in MongoDB
- Redirects users from short URL to original
- Validates URLs for correct format
- Uses `.env` for environment variables
- Jest-based test suite

---

## 🧭 API Endpoints

| Method | Endpoint            | Description                       |
| ------ | ------------------- | --------------------------------- |
| POST   | `/api/shorturl`     | Submit a new long URL             |
| GET    | `/api/shorturl/:id` | Redirect to the original long URL |

---

## 📁 Folder Structure

```bash
Url-Shortener/
├── src/
│   ├── routes/         # API route definitions
│   ├── controllers/    # Business logic
│   ├── db/             # MongoDB connection logic
│   └── utils/          # Validation or helper functions
├── views/              # Root HTML interface
├── public/             # Static files
├── .env                # MongoDB URI and environment variables
├── index.js            # Entry point
├── README.md
```

## 🧪 Running the Project Locally

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

- Designing RESTful microservices
- Connecting to and querying MongoDB with Mongoose
- Managing environment-based configurations
- Creating reusable Express controllers and routes
- Writing testable backend code using Jes
