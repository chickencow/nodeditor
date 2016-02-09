var express = require('express');
var app = express();
var http = require('http').Server(app);

/** set static file directories */
app.use('/static', express.static(__dirname + '/src'));
app.use('/libs/jsplumb', express.static(__dirname + '/node_modules/jsplumb/dist/js'));
app.use('/libs/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/libs/jquery-ui', express.static(__dirname + '/node_modules/jquery-ui'));


/** serve editor */
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/editor.html');
});

/** start webserver on port 4000 */
http.listen(3000, function() {
  console.log('listening on *:3000');
});
