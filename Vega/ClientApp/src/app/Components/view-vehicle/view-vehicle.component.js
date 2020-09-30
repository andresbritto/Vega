"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewVehicleComponent = void 0;
var core_1 = require("@angular/core");
var ViewVehicleComponent = /** @class */ (function () {
    function ViewVehicleComponent(route, router, toastrService, photoService, vehicleService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.toastrService = toastrService;
        this.photoService = photoService;
        this.vehicleService = vehicleService;
        route.params.subscribe(function (p) {
            _this.vehicleId = +p['id'];
            if (isNaN(_this.vehicleId) || _this.vehicleId <= 0) {
                router.navigate(['/vehicles']);
                return;
            }
        });
    }
    ViewVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoService.getPhotos(this.vehicleId)
            .subscribe(function (photos) { return _this.photos = photos; });
        this.vehicleService.getVehicle(this.vehicleId)
            .subscribe(function (v) { return _this.vehicle = v; }, function (err) {
            if (err.status === 404) {
                _this.router.navigate(['/vehicles']);
                return;
            }
        });
    };
    ViewVehicleComponent.prototype.delete = function () {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.vehicleService.delete(this.vehicle.id)
                .subscribe(function (x) {
                _this.toastrService.success('The vehicle was sucessfully deleted.', 'Success');
                _this.router.navigate(['/vehicles']);
            });
        }
    };
    ViewVehicleComponent.prototype.uploadPhoto = function () {
        var _this = this;
        var nativeElement = this.fileInput.nativeElement;
        this.photoService.upload(this.vehicleId, nativeElement.files[0])
            .subscribe(function (photo) {
            _this.photos.push(photo);
        });
    };
    __decorate([
        core_1.ViewChild('fileInput')
    ], ViewVehicleComponent.prototype, "fileInput", void 0);
    ViewVehicleComponent = __decorate([
        core_1.Component({
            selector: 'app-view-vehicle',
            templateUrl: './view-vehicle.component.html',
            styleUrls: ['./view-vehicle.component.scss']
        })
    ], ViewVehicleComponent);
    return ViewVehicleComponent;
}());
exports.ViewVehicleComponent = ViewVehicleComponent;
//# sourceMappingURL=view-vehicle.component.js.map