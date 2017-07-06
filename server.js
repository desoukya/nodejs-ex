//  OpenShift sample Node application
var express = require('express'),
    app     = express();
    
app.get('/', function (req, res) {
  res.send('Hello from redhat!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
