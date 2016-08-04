//ContactModel - ES5

/**
 * ContactModel
 * @param datas
 * @constructor
 */
function ContactModel(datas) {
    if(datas){
        this.lastname = datas.lastname;
        this.firstname = datas.firstname;
        this.phone = datas.phone;
        this.email = datas.email;
        this.srcImg = datas.srcImg;
    }
}

ContactModel.prototype.getLastname = function () {
    return this.lastname;
};

ContactModel.prototype.setLastname = function (lastname) {
    this.lastname = lastname;
};

ContactModel.prototype.getFirstname = function () {
    return this.firstname;
};

ContactModel.prototype.setFirstname = function (firstname) {
    this.firstname = firstname;
};

ContactModel.prototype.getPhone = function () {
    return this.phone;
};

ContactModel.prototype.setPhone = function (phone) {
    this.phone = phone;
};

ContactModel.prototype.getEmail = function () {
    return this.email;
};

ContactModel.prototype.setEmail = function (email) {
    this.email = email;
};

ContactModel.prototype.getsrcImg = function () {
    return this.srcImg;
};

ContactModel.prototype.setsrcImg = function (srcImg) {
    this.srcImg = srcImg;
};