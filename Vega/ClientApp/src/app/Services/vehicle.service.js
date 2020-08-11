"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleService = void 0;
var core_1 = require("@angular/core");
var VehicleService = /** @class */ (function () {
    function VehicleService(http) {
        this.http = http;
    }
    VehicleService.prototype.getMakes = function () {
        return this.http.get('/api/makes');
    };
    VehicleService.prototype.getFeatures = function () {
        return this.http.get('/api/features');
    };
    VehicleService.prototype.create = function (vehicle) {
        return this.http.post('/api/vehicles', vehicle);
    };
    VehicleService.prototype.getVehicle = function (id) {
        return this.http.get('/api/vehicles/' + id);
    };
    VehicleService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], VehicleService);
    return VehicleService;
}());
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle.service.js.map