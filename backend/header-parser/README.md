# 🧾 Header Parser Microservice

**HeaderParser** is a simple backend API microservice originally based on a FreeCodeCamp backend certification challenge. This version has been refactored with a modular folder structure (MVC-style, without models) and includes basic automated testing.

> 🧪 Designed to return information from HTTP headers such as IP address, language, and software (user-agent).

---

## 📦 Features

- Parses the `req` object and extracts:
  - IP address
  - Language (from Accept-Language header)
  - Software (from User-Agent)
- Minimalist Express app
- Folder restructured for clarity and scalability
- Includes test scripts for validation

---

## 📁 Project Structure

```bash
HeaderParser/
├── public/           # Static assets
├── src/              # Main app logic (routes, controller)
│   ├── routes/
│   └── app.js
├── views/            # HTML template for root page
├── logs/             # Optional: store server logs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

1. Clone the project
   ```
   git clone #clone main project
   cd header-parser
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run the development server
   ```
   npm run watch
   ```
   Then open your browser:
   ```
   http://localhost:3000/api/whoami
   ```

## 🧪 Running Tests

    ```
    npm run test
    ```
    This will execute basic test cases to validate the output format and content of the API.

## 🌐 Sample Output

```
{
  "ipaddress": "xx.xx.xx.xx",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
}
```

## 🧠 What I Learned

- Applying simple Express routing patterns
- Understanding HTTP headers and how to extract them
- Testing basic API behavior
- Organizing backend code for scalability (MVC-like structure)

---

> “Simple endpoints like this form the foundation for larger API systems.”
