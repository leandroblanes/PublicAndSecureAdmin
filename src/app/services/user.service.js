"use strict";
var user_1 = require("./user");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.isLogged = function () {
        return sessionStorage.getItem('access-token') !== null;
    };
    UserService.prototype.login = function (login, senha) {
        if (login == "admin" && senha == "123") {
            sessionStorage.setItem('access-token', '123');
            this.authUser = new user_1.User();
            this.authUser.nome = "Admin";
            this.authUser.login = login;
            this.authUser.senha = senha;
            return Promise.resolve(this.authUser);
        }
        return Promise.reject(null);
    };
    UserService.prototype.logout = function () {
        sessionStorage.removeItem('access-token');
        this.authUser = null;
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map