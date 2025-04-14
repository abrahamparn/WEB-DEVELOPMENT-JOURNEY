const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const fs = require("fs");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "My buddy app",
    width: 1020,
    height: 1920,
    frame: false, // This will create a frameless window.

    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.webContents.openDevTools();
  mainWindow.setMenuBarVisibility(false);

  const startUrl = url.format({
    pathname: path.join(__dirname, "/click_indomaret/dist/index.html"),
    protocol: "file:",
    slashes: true,
  });

  //mainWindow.loadURL("http://localhost:5173/");
  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);
