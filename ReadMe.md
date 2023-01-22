# Tasks

# Frontend startup
`cd frontend` into the frontend/ folder.
## First time
Run `npm install` to install all the dependencies in /frontend folder.
## Every other time
Run `expo start` command in /frontend folder.

# Backend startup
`cd backend` into the backend/ folder.
## First time
1. Run `npm install mongodb express cors dotenv` in backend/ folder.
2. Change `config.env` file to have these requirements:
    * > ATLAS_URI=mongodb+srv://{username}:{password}@discover.7sfeogj.mongodb.net/?retryWrites=true&w=majority
    * > PORT=5010
## Every other time
Run `node server.js` command in backend/ folder.

# Bugs...

## Webpack issues < 5 with the https

1. If you don't have a webpack.config.js file in your immediate `src/` folder, it means you installed with `create-react-app`. Otherwise go to `node_modules/` folder, search for `react-scripts/config` folder, open up `webpack.config.js` file and search for `resolve`. 
    - Search for this:
    - // This allows you to set a fallback for where webpack should look for modules.
      // We placed these paths second because we want `node_modules` to "win"
      // if there are any conflicts. This matches Node resolution mechanism.
      // https://github.com/facebook/create-react-app/issues/253
    - https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
2. Add whatever packages it's missing. Read it carefully, and install the correct ones (For example, I did `npm install https-browserify` for https).
    - > resolve: {
      > fallback: {
      >   "https": require.resolve("https-browserify"),
      >   "http": require.resolve("stream-http"),
      >   "url": require.resolve("url/"),
      >   "buffer": require.resolve("buffer/"),
      > },
      > // This allows you to set a fallback for where webpack should look for modules.
      > // We placed these paths second because we want `node_modules` to "win"
      > // if there are any conflicts. This matches Node resolution mechanism.
      > // https://github.com/facebook/create-react-app/issues/253
      > modules: ['node_modules', paths.appNodeModules].concat(
      >   modules.additionalModulePaths || []
      > ),
      > ... etc etc

# Default Tutorial:
## Getting Started with Create React App

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
