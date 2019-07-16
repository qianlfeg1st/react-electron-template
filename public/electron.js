const { app, BrowserWindow, Menu, Tray } = require('electron')
// const path = require('path')
// const url = require('url')
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:3000/#/` : `file://${__dirname}/index.html#/`
global.__static = `${__dirname}/static/`

// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow
let tray = null

function createWindow () {

  // console.log('__static', global.__static)
  tray = new Tray(`${global.__static}images/tomato.png`)

  tray.setToolTip('This is my application.')

  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: '二维码生成器',
      accelerator: 'Command+Z',
      click: res => {

        mainWindow = new BrowserWindow({
          width: 1000,
          height: 800,
          webPreferences: {
            nodeIntegration: true
          }
        })

        mainWindow.webContents.openDevTools()

        console.log('winURL', winURL)

        mainWindow.loadURL(`${winURL}qrcode`)
        // mainWindow.loadURL(`http://localhost:3000/#/qrcode`)
      }
    },
    {
      type: 'separator'
    },
    {
      label: '测试',
      role: 'front'
    }
  ]))

}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)

// 所有窗口关闭时退出应用.
app.on('window-all-closed', () => {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
   // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow()
  }
})