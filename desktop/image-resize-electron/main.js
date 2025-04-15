const {app, BrowserWindow, Menu, ipcMain, shell} = require('electron')
const path = require('path')
const os = require('os')
const resizeImg = require('resize-img')
const fs = require('fs')
// const path  = require('path')
const isMac = process.platform === 'darwin'
process.env.NODE_ENV = 'production'
const isDev = process.env.NODE_ENV !== 'production'

let mainWindow;
function createMainWindow(){
     mainWindow = new BrowserWindow({
        title:"Image Resizer",
        width: isDev? 1000: 500,
        height: isDev? 1000: 600,
        webPreferences: {
            contextIsolation:true,
            nodeIntegration:true,
            preload: path.join(__dirname, 'preload.js')
          }
      
    });

    // Open dev tools if in dev environment
    if(isDev){
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))
}

// Create about window
function createAboutWindow(){
    const aboutWindow = new BrowserWindow({
        title:"About Image Resizer",
        width: 300,
        height: 300,
    });

 

    aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'))
}

app.whenReady().then(()=>{
    createMainWindow();
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu)
    mainMenu.on('closed', ()=>{
        mainWindow = null
    })
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
      })
})

// MENU TEMPLATE 
const menu = [
    ...(isMac ? [{
        label: app.name,
        subMenu:[{
            label: 'About',
            click: createAboutWindow
        }]
    }] : []),
    {
    label:'File',
    submenu:  [{
        label: 'Quit',
        click: () =>{app.quit()},
        accelerator: 'CTRL+W'
    }]
}, 
    ...(!isMac ? [{
        label: 'Help',
        submenu: [
            {
                label:'About',
                click: createAboutWindow
            }
        ]
    }]: [])

]


// Response to IPC Renderer
ipcMain.on('image:resize', (e, options) => {
    console.log(options)
    options.dest = path.join(os.homedir(), 'imageresizer')
    resizeImage(options)
})

async function resizeImage({imgPath, width, height, dest}){
    try {
        const newPath = await resizeImg(fs.readFileSync(imgPath),{
            width: +width,
            height: +height
        }) 

        const filename = path.basename(imgPath)

        // create destination folder if it doesnot exist
        if(!fs.existsSync(dest)){
            fs.mkdirSync(dest)
        }

        fs.writeFileSync(path.join(dest, filename), newPath);

        //return success to renderer
        mainWindow.webContents.send('image:done')
        //open destionation folder
        shell.openPath(dest)
    } catch (error) {
        console.log(error)
    }

}
app.on('window-all-closed', () => {
    if (!isMac) {
    app.quit()
    }
})