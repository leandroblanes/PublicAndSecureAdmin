"use strict";
var dashboard_component_1 = require("./dashboard.component");
var login_component_1 = require("./login.component");
exports.secure_routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
//# sourceMappingURL=secure_routes.js.map