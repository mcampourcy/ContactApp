//VIEW - ES 5

/**
 * ListView
 * Parent Constructor : EventEmitter
 * @param model
 */

// The view listen to the model, and emit datas based on events.

// "bind(this)" keeps the context : without it, "this" is in the context of the EventEmitter (parent constructor).
// if the model changes, the view changes too, so bind precise the context (in that case, the view).

function ListView(model) {
    EventEmitter.call(this); //Call the parent constructor with the object's datas
    this._model = model;
    this.init();
    this.listen();
    this.bindListeners();
    this.display();
}

//Overwrite the basic prototype : become an object which is the eventEmitter (parent constructor) prototype
ListView.prototype = Object.create(EventEmitter.prototype);
ListView.prototype.constructor = ListView; //precise that the constructor's prototype is ListView = reciprocity (not required)

/**
 * Function init
 * Prepare the view : select the DOM's elements
 */
ListView.prototype.init = function () {
    this._contactList = document.getElementById('contact-list');
};

/**
 * Function listen
 * Check the model : if it changes, display the view with new datas
 */
ListView.prototype.listen = function () {
    this._model.on('LIST', this.display.bind(this));
};

/**
 * Function bindListeners
 * Add Events Listeners
 */
ListView.prototype.bindListeners = function(){
};

/**
 * Function display
 * Display the view
 */
ListView.prototype.display = function () {
    //FONCTION EMPTY()
    var p = document.createElement('p');
    if(this._model.contacts === 0){ //If no records
        this._contactList.innerHTML = ''; //Emptying the DIV
        p.innerHTML = 'Aucun enregistrement trouvé';
        this._contactList.appendChild(p);
    } else {
        this._contactList.innerHTML = ''; //Emptying the DIV
        this._model.contacts.forEach(function (contact, index) { //In JavaScript, arrays always use numbered indexes

            //Elements creation
            var contactAlone = document.createElement('div');
            var contactTitle = document.createElement('div');
            contactAlone.className = 'contact-alone';
            contactTitle.className = 'contact-title';

            var img = document.createElement('img');
            var h2 = document.createElement('h2');

            //Datas
            img.setAttribute('src', contact.getsrcImg());
            h2.innerHTML = contact.getFirstname() + ' ' + contact.getLastname();
            contactAlone.dataset.id = contact.getcontactId();

            //Add to DOM
            this._contactList.appendChild(contactAlone);
            contactAlone.appendChild(img);
            contactAlone.appendChild(contactTitle);
            contactTitle.appendChild(h2);

            contactAlone.addEventListener('click', function (e) {
                e.preventDefault();
                this.emit('SELECT', e.currentTarget.dataset.id);
            }.bind(this));

        }.bind(this));
    }
};