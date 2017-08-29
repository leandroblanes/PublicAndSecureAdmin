"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./../services/user.service");
var login_component_1 = require("./login.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var SecureComponent = (function () {
    function SecureComponent(router, userService, modalService) {
        this.router = router;
        this.userService = userService;
        this.modalService = modalService;
        if (!this.userService.isLogged())
            this.modalService.open(login_component_1.LoginComponent);
    }
    SecureComponent.prototype.sair = function () {
        this.userService.logout();
        this.router.navigate(['/admin/login']);
    };
    return SecureComponent;
}());
SecureComponent = __decorate([
    core_1.Component({
        selector: 'secure',
        templateUrl: './secure.component.html',
        styleUrls: ['./secure.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, ng_bootstrap_1.NgbModal])
], SecureComponent);
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=secure.component.js.map