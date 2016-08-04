if(window.location.protocol === 'file:'){ //si on lit l'appli depuis le fichier html et pas depuis un serveur (=> appli Android)
    document.addEventListener('deviceready', function () {// on lance le plugin camera s'il existe, sinon l'appli
        initApp();
    }, false);
} else {
    initApp();
}

function initApp(){
    var actionModel = new ActionModel();
    var listView = new ListView(actionModel);
    var addView = new AddView(actionModel);
    var controller = new ContactController(actionModel, listView, addView);
}