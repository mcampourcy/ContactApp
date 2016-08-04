//ActionModel - ES5

/**
 * ActionModel
 * Parent Constructor : EventEmitter
 */
function ActionModel() {
    EventEmitter.call(this); //Call the parent constructor with the object's datas
    this.contacts = [];
    this.getAllContacts();
}

//Overwrite the basic prototype : become an object which is the eventEmitter (parent constructor) prototype
ActionModel.prototype = Object.create(EventEmitter.prototype);
ActionModel.prototype.constructor = ActionModel; //precise that the constructor's prototype is ActionModel = reciprocity (not required)

/**
 * Function getAllContacts
 * Put the datas in local storage, then push them in getters / setters
 */
ActionModel.prototype.getAllContacts = function () {
    var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    //The forEach() method executes a provided function once per array element
    contacts.forEach(function (contact) {
        this.contacts.push(new ContactModel(contact));
    }, this);
};

/**
 * Function addContact
 * @param contact
 */
ActionModel.prototype.addContact = function (contact) {
    this.contacts.push(contact); //Add the parameter's datas in the array
    localStorage.setItem("contacts", JSON.stringify(this.contacts)); //JSON stringify, for local storage
    this.emit('LIST'); //Warn the view that it changed
};
