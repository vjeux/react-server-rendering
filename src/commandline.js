var ReactServerRendering = require('./ReactServerRendering');
var tutorial = require('./tutorial');

ReactServerRendering.renderComponentToString(tutorial(), console.log.bind(console));