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
        this.PAGE_SIZE = 3;
        this.queryResult = {
            totalItems: 0,
            items: []
        };
        this.query = {
            pageSize: this.PAGE_SIZE
        };
        this.columns = [
            { title: 'Id' },
            { title: 'Contact Name', key: 'contactName', isSortable: true },
            { title: 'Make', key: 'make', isSortable: true },
            { title: 'Model', key: 'model', isSortable: true },
            {}
        ];
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
        this.vehicleService.getVehicles(this.query)
            .subscribe(function (result) { return _this.queryResult = result; });
    };
    VehicleListComponent.prototype.onFilterChange = function () {
        this.query.page = 1;
        this.populateVehicles();
    };
    VehicleListComponent.prototype.resetFilter = function () {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE
        };
        this.populateVehicles();
    };
    VehicleListComponent.prototype.sortBy = function (columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.populateVehicles();
    };
    VehicleListComponent.prototype.onPageChange = function (page) {
        this.query.page = page;
        this.populateVehicles();
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