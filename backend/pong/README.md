# 🕹️ Real-Time Pong Game (Socket.IO + Node.js)

A multiplayer **real-time Pong game** built with **Node.js**, **Socket.IO**, and HTML5 Canvas. This project demonstrates real-time client-server communication, basic game loop logic, and WebSocket-based interaction for browser games.

> 🚀 A fun implementation to explore WebSockets and real-time event handling.

---

## 🎮 Features

- 🎯 Classic two-player Pong gameplay
- 🔄 Real-time position syncing with Socket.IO
- ⌛ Game loop powered by `requestAnimationFrame`
- 🎨 Responsive UI using HTML5 Canvas
- 🔌 Server-client architecture using Node.js and Socket.IO

---

## 📁 Folder Structure

```bash
pong/
├── public/              # Client-side HTML, CSS, JS
│   └── index.html       # Canvas + basic UI
├── server.js            # Express + Socket.IO backend
├── socket.js            # Game logic and event handlers
├── api.js               # API routes (placeholder)
├── package.json
└── README.md
```

## 🚀 Getting Started

### 🔧 Installation

```
git clone https://github.com/abrahamparn/pong.git
cd pong
npm install
```

### ▶️ Run the Game

```
npm start
```

Open your browser at:

```
http://localhost:3000
```

> Open in two tabs or browsers to simulate multiplayer mode.

## 🔌 How It Works

- The server hosts the canvas logic and state (position, velocity)
- Socket.IO emits and receives real-time events between two clients
- Paddle movement and collision logic are synced with minimal latency
- Game runs on a shared frame update cycle with a simple physics engine

## 🧠 What I Learned

- Setting up a WebSocket server using Socket.IO
- Emitting and listening to real-time events in JavaScript
- Syncing game state between clients
- Implementing game loops and frame rendering
- Debugging multiplayer behavior in networked environments

## 🧰 Tech Stack

- Frontend: HTML5, CSS3, Canvas API, Vanilla JS
- Backend: Node.js, Express.js, Socket.IO
- Tools: Nodemon, VSCode Live Preview
