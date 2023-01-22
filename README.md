# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<!-- To use Font Awesome -->
1. To use FontAwesome icons in a ReactJS project, you can use the react-fontawesome library. Here are the steps to get started:

2. Install the library by running the command npm install --save @fortawesome/react-fontawesome in your project directory.
Import the library in your React component:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

3. To use an icon, you can use the FontAwesomeIcon component and pass the icon name as a prop:
<FontAwesomeIcon icon="coffee" />

4. To use specific version of fontawesome icons you may need to import them specifically
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

5. If you want to customize the icon, you can pass additional props such as size and color.
<FontAwesomeIcon icon={faCoffee} size="2x" color="red" />

Link: https://adnegshomes-rentals.netlify.app/

