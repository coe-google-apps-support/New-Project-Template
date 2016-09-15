
var Test = function () {

  // Public Function
  this.testFunction = function() {
    privateTest('This is a test.');
  };

  // Private Function
  var privateTest = function (value) {
    alert(value);
  }
}

module.exports = Test;
