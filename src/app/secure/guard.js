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
var Guard = (function () {
    function Guard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    Guard.prototype.canActivate = function (route, state) {
        if (this.userService.isLogged() || route.children[0].url[0].path == 'login')
            return true;
        this.router.navigate(['/admin/login']);
        return true;
    };
    return Guard;
}());
Guard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], Guard);
exports.Guard = Guard;
//# sourceMappingURL=guard.js.map