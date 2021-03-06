//  OpenShift sample Node application
var express = require('express'),
    app     = express();
    
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
  console.log('hello');
  res.send('welcome to my redhat openshift demo!!');
});

app.get('/version', function (req, res) {
  console.log('version');
  res.json({
    version: 'v.1.1'
  });
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
