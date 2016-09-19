


/**
 * This object just acts as an example for how to include files using browserify.
 *
 * @constructor
 */
var Test = function() {

  /**
   * This is just an example of how to use private functions inside public functions.
   *
   * @public
   */
  this.testFunction = function() {
    privateTest('This is a test.');
  };

  /**
   * This is an example of a private function. It can only be called inside this class.
   *
   * @param {string} value Print this in an alert message box.
   * @private
   */
  var privateTest = function(value) {
    alert(value);
  };
};


/**
 * Ignore this.
 */
module.exports = Test;
