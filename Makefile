build:
	node_modules/.bin/jsx src/tutorial.jsx > src/tutorial.js
	node_modules/.bin/browserify src/tutorial.js > src/tutorial-browser.js

serve: build
	node src/server.js