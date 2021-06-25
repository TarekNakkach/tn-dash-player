## Available Scripts

In the project directory, you can run:

### `npm install`

Install the app dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Convert your React App to Android App

### `Prepare config file`

Under your root React App add two file capacitor.config.json & ionic.config.json as bellow : 

1 - capacitor.config.json :
{
  "appId": "io.ionic.nameofyourapp",
  "appName": "nameofyourapp",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "build",
  "cordova": {}
}

2 - ionic.config.json : 
{
  "name": "nameofyourapp",
  "integrations": {
    "capacitor": {}
  },
  "type": "react"
}

Note : No separator in the App name or Id.

### `npm run build`

Build your React App.

### `npm install -g @ionic/cli`

Install ionic globally.

### `npm install -g @capacitor/cli`

Install capacitor globally.

### `npm install @capacitor/core --save`

Install the capacitor core in your React App.

### `ionic capacitor add android`

Create an Android App based on your React App.



