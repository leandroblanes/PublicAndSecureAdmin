"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var public_component_1 = require("./public/public.component");
var secure_component_1 = require("./secure/secure.component");
var public_routes_1 = require("./public/public_routes");
var secure_routes_1 = require("./secure/secure_routes");
var guard_1 = require("./secure/guard");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: public_component_1.PublicComponent, children: public_routes_1.public_routes },
    { path: 'admin', component: secure_component_1.SecureComponent, canActivate: [guard_1.Guard], children: secure_routes_1.secure_routes }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map