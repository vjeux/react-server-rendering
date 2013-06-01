build: src/tutorial.js src/tutorial-browser.js

src/tutorial.js: src/tutorial.jsx
	node_modules/.bin/jsx src/tutorial.jsx > src/tutorial.js

src/tutorial-browser.js: src/tutorial.js
	node_modules/.bin/browserify src/tutorial.js > src/tutorial-browser.js

commandline: build
	node src/commandline.js

serve: build
	node src/server.js