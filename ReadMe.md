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