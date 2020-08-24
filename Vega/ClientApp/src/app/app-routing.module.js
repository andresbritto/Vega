"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var vehicle_form_component_1 = require("./Components/vehicle-form/vehicle-form.component");
var home_component_1 = require("./Components/home/home.component");
var vehicle_list_component_1 = require("./Components/vehicle-list/vehicle-list.component");
var view_vehicle_component_1 = require("./Components/view-vehicle/view-vehicle.component");
var routes = [
    { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
    { path: 'vehicles/new', component: vehicle_form_component_1.VehicleFormComponent },
    { path: 'vehicles/edit/:id', component: vehicle_form_component_1.VehicleFormComponent },
    { path: 'vehicles/:id', component: view_vehicle_component_1.ViewVehicleComponent },
    { path: 'vehicles', component: vehicle_list_component_1.VehicleListComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map