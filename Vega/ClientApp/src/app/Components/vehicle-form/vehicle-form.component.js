"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFormComponent = void 0;
var _ = require("underscore");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var VehicleFormComponent = /** @class */ (function () {
    function VehicleFormComponent(route, router, vehicleService, toastrService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.vehicleService = vehicleService;
        this.toastrService = toastrService;
        this.vehicle = {
            id: 0,
            makeId: 0,
            modelId: 0,
            isRegistered: false,
            features: [],
            contact: {
                name: '',
                email: '',
                phone: '',
            }
        };
        route.params.subscribe(function (p) {
            _this.vehicle.id = +p['id'] || 0;
        });
    }
    //ngOnInit(): void {
    //  if (this.vehicle.id)
    //    this.vehicleService.getVehicle(this.vehicle.id)
    //      .subscribe(v => {
    //        this.vehicle = v;
    //      }, err => {
    //        if (err.status == 404)
    //          this.router.navigate(['/home']);
    //      });
    //  this.vehicleService.getMakes()
    //    .subscribe((makes: object[]) => this.makes = makes);
    //  this.vehicleService.getFeatures()
    //    .subscribe((features: object[]) => this.features = features);
    //}
    VehicleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sources = [
            this.vehicleService.getMakes(),
            this.vehicleService.getFeatures(),
        ];
        if (this.vehicle.id)
            sources.push(this.vehicleService.getVehicle(this.vehicle.id));
        rxjs_1.forkJoin(sources).subscribe(function (data) {
            _this.makes = data[0];
            _this.features = data[1];
            if (_this.vehicle.id) {
                _this.setVehicle(data[2]);
                _this.populateModels();
            }
        }, function (err) {
            if (err.status === 404)
                _this.router.navigate(['/home']);
        });
    };
    VehicleFormComponent.prototype.setVehicle = function (v) {
        this.vehicle.id = v.id;
        this.vehicle.makeId = v.make.id;
        this.vehicle.modelId = v.model.id;
        this.vehicle.isRegistered = v.isRegistered;
        this.vehicle.contact = v.contact;
        this.vehicle.features = _.pluck(v.features, 'id');
    };
    VehicleFormComponent.prototype.onMakeChange = function () {
        this.populateModels();
        delete this.vehicle.modelId;
    };
    VehicleFormComponent.prototype.populateModels = function () {
        var _this = this;
        var selectedMake = this.makes.find(function (m) { return m.id === _this.vehicle.makeId; });
        this.models = selectedMake ? selectedMake.models : [];
    };
    VehicleFormComponent.prototype.onFeatureToggle = function (featureId, $event) {
        if ($event.target.checked)
            this.vehicle.features.push(featureId);
        else {
            var index = this.vehicle.features.indexOf(featureId);
            this.vehicle.features.splice(index, 1);
        }
    };
    VehicleFormComponent.prototype.submit = function () {
        var _this = this;
        var result$ = (this.vehicle.id) ? this.vehicleService.update(this.vehicle) : this.vehicleService.create(this.vehicle);
        result$.subscribe(function (vehicle) {
            _this.toastrService.success('The vehicle was sucessfully updated.', 'Success');
            _this.router.navigate(['/vehicles/', vehicle.id]);
        });
    };
    VehicleFormComponent = __decorate([
        core_1.Component({
            selector: 'app-vehicle-form',
            templateUrl: './vehicle-form.component.html',
            styleUrls: ['./vehicle-form.component.scss']
        })
    ], VehicleFormComponent);
    return VehicleFormComponent;
}());
exports.VehicleFormComponent = VehicleFormComponent;
//# sourceMappingURL=vehicle-form.component.js.map