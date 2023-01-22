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
