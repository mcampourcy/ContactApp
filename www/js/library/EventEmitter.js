//Every JavaScript object has a prototype. The prototype is also an object.
//All JavaScript objects inherit their properties and methods from their prototype.

//EventEmitter
//Event emitter - triggers an event to which anyone can listen
function EventEmitter() {
    this.events = {}; //associative array : event => functions to call
}

/**
 * Add a function to the event
 * @param eventName
 * @param fn
 */
EventEmitter.prototype.on = function (eventName, fn) {
    //si l'eventName en paramètre n'est pas vide, alors on récupère la ligne du tableau correspondant. Sinon, c'est vide.
    this.events[eventName] = this.events[eventName] || [];
    //on associe le nom de l'event passé en paramètre à la fonction passée en paramètre
    //on push tout dans le tableau
    this.events[eventName].push(fn);
    //résultat : on('click') => doSomething();
};

/**
 * Remove a function to the event
 * @param eventName
 * @param fn
 */
EventEmitter.prototype.off = function (eventName, fn) {
    //on récupère la ligne du tableau correspondant à l'event passé en paramètre
    //indexOf : The indexOf() method returns the position of the first occurrence of a specified value in a string.
    //ici, on renvoie la position de la fonction passée en paramètre (l'event pouvant avoir plusieurs fonctions associées)
    var idx = this.events[eventName].indexOf(fn);
};

/**
 * Trigger the event (call all the functions linked)
 * @param eventName
 * @param data
 */
EventEmitter.prototype.emit = function (eventName, data) {
    //si le nom de l'event passé en paramètre est dans le tableau des évènements...
    if(this.events[eventName]){
        //pour chaque fonction de l'event...
        this.events[eventName].forEach(function (fn) {
            //on affiche la fonction avec les données passées en paramètre
            fn(data);
        });
    }
};

/*
* EX :
* var test = new EventEmitter();
* test.on('click', happyFace());
* function happyFace(data) {
* console.log('Happy' + data);
* }
* */