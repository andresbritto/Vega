"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleListComponent = void 0;
var core_1 = require("@angular/core");
var VehicleListComponent = /** @class */ (function () {
    function VehicleListComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.filter = {};
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.getMakes()
            .subscribe(function (makes) { return _this.makes = makes; });
        //filtering on the Client
        //this.vehicleService.getVehicles()
        //  .subscribe(vehicles => this.vehicles = this.allVehicles = vehicles);
        //filtering on the Server
        this.populateVehicles();
    };
    //filtering on the Client
    //onFilterChange() {
    //  let vehicles = this.allVehicles;
    //  if (this.filter.makeId)
    //    vehicles = vehicles.filter(v => v.make.id == this.filter.makeId);
    //  if (this.filter.modelId)
    //    vehicles = vehicles.filter(v => v.model.id == this.filter.modelId);
    //  this.vehicles = vehicles;
    //}
    //filtering on the Server
    VehicleListComponent.prototype.populateVehicles = function () {
        var _this = this;
        this.vehicleService.getVehicles(this.filter)
            .subscribe(function (vehicles) { return _this.vehicles = vehicles; });
    };
    VehicleListComponent.prototype.onFilterChange = function () {
        this.populateVehicles();
    };
    VehicleListComponent.prototype.resetFilter = function () {
        this.filter = {};
        this.onFilterChange();
    };
    VehicleListComponent = __decorate([
        core_1.Component({
            selector: 'app-vehicle-list',
            templateUrl: './vehicle-list.component.html',
            styleUrls: ['./vehicle-list.component.scss']
        })
    ], VehicleListComponent);
    return VehicleListComponent;
}());
exports.VehicleListComponent = VehicleListComponent;
//# sourceMappingURL=vehicle-list.component.js.map