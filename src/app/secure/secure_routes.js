"use strict";
var dashboard_component_1 = require("./dashboard.component");
exports.secure_routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
//# sourceMappingURL=secure_routes.js.map