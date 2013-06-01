// Modified from: https://github.com/petehunt/react-tutorial/blob/master/server.js
// to support server rendered React.

var ReactServerRendering = require('./ReactServerRendering');
var tutorial = require('./tutorial');

var fs = require('fs');

var express = require('express');
var app = express();

var comments = [{author: 'Pete Hunt', text: 'Hey there!'}];

app.use('/', express.static(__dirname));
app.use(express.bodyParser());

// Standard client-rendered; just return static HTML
app.get('/client-rendered', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(fs.readFileSync(__dirname + '/template.html'));
});

// Pre-fill the markup in the container. When React runs it'll just
// attach event handlers and run lifecycle.
app.get('/server-rendered', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  var template = fs.readFileSync(__dirname + '/template.html').toString();

  ReactServerRendering.renderComponentToString(
    tutorial(),
    function(markup) {
      res.send(template.replace('{{react}}', markup));
    }
  );
});

app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(3000);
