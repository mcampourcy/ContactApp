//CONTROLLER - ES 5

/**
 * ContactController
 * @param model
 * @param listView
 * @param addView
 * @constructor
 */
function ContactController(model, listView, addView, detailView){
    this._model = model;
    this._listView = listView;
    this._addView = addView;
    this._detailView = detailView;
    this.listen();
}

/**
 * Function listen
 * Check the view : if it changes, send datas to the model
 */
ContactController.prototype.listen = function () {
    this._listView.on('SELECT', this.getContactAction.bind(this));
    this._addView.on('ADD', this.addContactAction.bind(this));
};

/**
 * Function getContactAction
 * @param id
 */
ContactController.prototype.getContactAction = function (id) {
    this._model.getContact(id);
};

/**
 * Function addContactAction
 * @param val
 */
ContactController.prototype.addContactAction = function(datas){
    var contact = new ContactModel(datas); //Create setters and getters from the view's datas
    this._model.addContact(contact); //Send the setters and getters to the model
};