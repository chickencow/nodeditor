var app = require('express')();
var http = require('http').Server(app);

var url = '/';
app.get(url, function(req, res) {
  res.sendFile(__dirname + '/src/editor.html');
});

/** start webserver on port 4000 */
http.listen(3000, function() {
  console.log('listening on *:3000');
});
