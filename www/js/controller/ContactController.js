//CONTROLLER - ES 5

/**
 * ContactController
 * @param model
 * @param listView
 * @param addView
 * @constructor
 */
function ContactController(model, listView, addView){
    this._model = model;
    this._listView = listView;
    this._addView = addView;
    this.listen();
}

/**
 * Function listen
 * Check the view : if it changes, send datas to the model
 */
ContactController.prototype.listen = function () {
    this._addView.on('ADD', this.addAction.bind(this));
};

/**
 * Function addAction
 * @param val
 */
ContactController.prototype.addAction = function(datas){
    var contact = new ContactModel(datas); //Create setters and getters from the view's datas
    this._model.addContact(contact); //Send the setters and getters to the model
    $.mobile.navigate('#list-contact-page'); //The view goes back to the listView
};