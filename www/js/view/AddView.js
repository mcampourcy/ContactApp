//VIEW - ES 5

/**
 * AddView
 * Parent Constructor : EventEmitter
 * @param model
 */

// The view listen to the model, and emit datas based on events.

// "bind(this)" keeps the context : without it, "this" is in the context of the EventEmitter (parent constructor).
// if the model changes, the view changes too, so bind precise the context (in that case, the view).

function AddView(model) {
    EventEmitter.call(this); //Call the parent constructor with the object's datas
    this._model = model;
    this.init();
    this.bindListeners();
}

//Overwrite the basic prototype : become an object which is the eventEmitter (parent constructor) prototype
AddView.prototype = Object.create(EventEmitter.prototype);
AddView.prototype.constructor = AddView; //precise that the constructor's prototype is AddView = reciprocity (not required)

/**
 * Function init
 * Prepare the view : select the DOM's elements
 */
AddView.prototype.init = function () {
    this._addContact = document.getElementById('add-contact-btn');
    this._addContactForm = document.getElementById('add-contact-form');
    this._contactId = document.getElementById('contactId');
    this._addImageBtn = document.getElementById('add-img-btn');
    this._imgContact = document.getElementById('img-contact');
};

/**
 * Function bindListeners
 * Add Events Listeners
 */
AddView.prototype.bindListeners = function(){

    //Button 'add' on click
    this._addContact.addEventListener('click', function (e) {
        e.preventDefault();
        this._addContactForm.reset();
        this._contactId.value = -1;
        $.mobile.navigate('#add-contact-page');
    }.bind(this));

    //Button 'camera' on click
    this._addImageBtn.addEventListener('click', function () {
        navigator.camera.getPicture(function(imageURI) {
            this._imgContact.src = imageURI;
        }.bind(this), function(message) {
            console.log(message);
        });
    }.bind(this));

    //Form submit
    this._addContactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var elements = this._addContactForm.elements;
        var contact = {};
        for(var ii = 1; ii < elements.length -1; ii++){
            contact[elements[ii].name] = elements[ii].value;
            //Fill the array name (key) => value
        }
        contact.srcImg = this._imgContact.src;
        this.emit('ADD', contact);
    }.bind(this));
};
