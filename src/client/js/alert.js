var $ = require('jquery');



/**
 * Creates a custom alert dialog.
 *
 * @param {jquery} appendTo The div to append the alert to.
 * @param {string} text The text to display in the alert box.
 * @constructor
 */
var Alert = function(appendTo, text) {

  var self = this;
  var alertDiv = $('<div class="custom-snackbar-small-error mdl-js-snackbar mdl-snackbar"></div>')
      .append('<i class="material-icons md-light"></i>')
      .append('<div class="mdl-snackbar__text"></div>')
      .append('<button class="mdl-snackbar__action" type="button"></button>');

  appendTo.append(alertDiv);

  var data = {
    message: text,
    timeout: 5000,
    actionHandler: handler,
    actionText: 'undo'
  };

  /**
     * Show the snackbar for data.timeout milliseconds.
     * TODO Make this more dynamic and customizable.
     *
     */
  this.show = function() {
    alertDiv[0].MaterialSnackbar.showSnackbar(data);
  };

  /**
   * Tie an elements click event to the show event.
   *
   * @param {domelement} element The dom element to watch for click events.
   */
  this.setTrigger = function(element) {
    $(element).on('click', function() {
      self.show();
    });
  };

  /**
   * The handler for the snackbars action text.
   *
   * @param {event} event The event that caused the call.
   */
  var handler = function(event) {
    console.log('TEST');
  };
};


/**
 * Ignore this.
 */
module.exports = Alert;
