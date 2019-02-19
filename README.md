# Nasa Mars Rovers

## Project
I built this using node and react, transpiled with babel and bundled with webpack. All of the react components were created using react hooks.

For a shared data model, I created a "redux-light" by using the `useReducer` and `useContext` hooks from the React API

For simple performance gains, I used the localforage module to cache api responses to avoid repeat calls.

## to run the project:
  * in terminal run: 
    * npm install
    * npm run start -- this will run webpack and start a server listening on port 8080