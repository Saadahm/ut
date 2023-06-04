

Brief overview of the implementation details and design decisions:
My project has 2 routes. One is the landing page and another one is the analytics page. I have used redux for state management and react tables.
Landing Page: On the landing page we have a table of 7 coloumns: Flight-Number, Rocket-Name, Launch-Date, Mission-Name, Success, Launch-Site and Article-Link. There is a search button : Search any mission name. In my code, I have made a searchfunc for that. There is a sort button on all the coloumns which sorts in ascending and descending order alternatively. In my code, sortIt function handles the sorting of coloumns, and changes it accordingly. At the end of the landing page, we have a list of page numbers, the table is paginated and we have the pagination component for that. Also, there is a paginate function. The actions folder contains analyticsActions.js and launchActions.js. There is a constants folder which has 2 files namely, actionTypes.js and analyticsActionTypes.js. The reducers folder contains, analyticsReducer.js, launchReducer.js and index.js. We have a store called store.js. The use of redux makes state management easy.
Analytics Page: The analytics page shows 2 plots, one is the rocket’s wise success/failure rate and another is the success/failure rate yearwise and compares one rocket with the other rockets.


Some installations required:
1) npm install react-router-dom
2) npm i axios
3) npm add react-chartjs-2 chart.js
4) npm install chart.js
5) npm install redux react-redux
6) npm install redux
7) npm npm install @reduxjs/toolkit
8) npm install react-chartjs-2@latest
9) npm start : to run the react app 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
