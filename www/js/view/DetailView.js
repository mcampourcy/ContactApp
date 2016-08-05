//VIEW - ES 5

/**
 * DetailView
 * Parent Constructor : EventEmitter
 * @param model
 */

// The view listen to the model, and emit datas based on events.

// "bind(this)" keeps the context : without it, "this" is in the context of the EventEmitter (parent constructor).
// if the model changes, the view changes too, so bind precise the context (in that case, the view).

function DetailView(model){
    EventEmitter.call(this);
    this._model = model;
    this.init();
    this.listen();
    this.bindListeners();
    this.display();
}

//Overwrite the basic prototype : become an object which is the eventEmitter (parent constructor) prototype
DetailView.prototype = Object.create(EventEmitter.prototype);
DetailView.prototype.constructor = DetailView;

/**
 * Function init
 * Prepare the view : select the DOM's elements
 */
DetailView.prototype.init = function () {
    this.main = document.getElementById('detail-contact-page');
    this.content = this.main.getElementsByClassName('ui-content')[0];
};

/**
 * Function listen
 * Check the model : if it changes, display the view with new datas
 */
DetailView.prototype.listen = function () {
    this._model.on('DETAIL', this.display.bind(this));
};

/**
 * Function bindListeners
 * Add Events Listeners
 */
DetailView.prototype.bindListeners = function () {

};

DetailView.prototype.display = function () {
    var contact = this._model.contact;
    if($.isEmptyObject(contact) === true) {
        $.mobile.navigate('#list-contact-page');
    } else {

        $(this.content).empty();

        //Elements creation
        var img = document.createElement('img');
        var h1 = document.createElement('h1');
        var ul = document.createElement('ul');
        var phone = document.createElement('li');
        var email = document.createElement('li');

        //Datas
        this.main.dataset.id = contact.getcontactId();
        img.setAttribute('src', contact.getsrcImg());
        h1.innerHTML = contact.getFirstname() + ' ' + contact.getLastname();
        phone.innerHTML = contact.getPhone();
        email.innerHTML = contact.getEmail();

        //Add to DOM
        this.content.appendChild(img);
        this.content.appendChild(h1);
        this.content.appendChild(ul);
        ul.appendChild(phone);
        ul.appendChild(email);

    }

};