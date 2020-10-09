"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGaurdService = void 0;
var core_1 = require("@angular/core");
var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(auth) {
        var _this = this;
        this.auth = auth;
        this.isAuthenticated = false;
        this.auth.isAuthenticated$.subscribe(function (x) {
            _this.isAuthenticated = x;
            console.log(_this.isAuthenticated);
        });
    }
    AuthGaurdService.prototype.canActivate = function () {
        if (this.isAuthenticated)
            return true;
        console.log("canActivate", this.isAuthenticated);
        window.location.href = "https://localhost:44339/";
        return false;
    };
    AuthGaurdService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthGaurdService);
    return AuthGaurdService;
}());
exports.AuthGaurdService = AuthGaurdService;
//# sourceMappingURL=auth-gaurd.service.js.map