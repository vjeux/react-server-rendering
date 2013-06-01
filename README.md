# React server rendering demo

This takes the React tutorial and renders it to a string.

## How to use from the command line

Ensure you have 0.3.2:

`npm install react-tools`

Desugar the example:

`jsx src/tutorial.jsx > src/tutorial.js`

See HTML printed to your console:

`node src/tutorial.js`

## How to use from the web

`npm install react-tools`

`jsx src/tutorial.jsx > src/tutorial.js`

`browserify src/tutorial.js > src/tutorial-browser.js`

`node src/server.js`

Open `http://localhost:3000/` in a web browser.
