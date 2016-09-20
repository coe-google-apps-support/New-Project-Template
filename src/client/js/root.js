var Test = require('./test.js');
var Alert = require('./alert.js');
var $ = require('jquery');

$(document).ready(function() {
  var test = new Test();
  test.testFunction();

  var alert = new Alert($('body'), 'This is a message.');
  alert.setTrigger($('#view-source'));
});
