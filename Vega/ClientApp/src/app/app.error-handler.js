"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppErrorHandler = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler(ngZone, injector) {
        this.ngZone = ngZone;
        this.injector = injector;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        var _this = this;
        this.toastrService = this.injector.get(ngx_toastr_1.ToastrService);
        if (error instanceof http_1.HttpErrorResponse) {
            //Backend returns unsuccessful response codes such as 404, 500 etc.
            this.ngZone.run(function () {
                _this.toastrService.error('An unexpected error happened. ' + error.message, 'Error' /*, { onActivateTick: true }*/);
            });
            console.error('Backend returned status code: ', error.status);
            console.error('Response body:', error.message);
        }
        else {
            //A client-side or network error occurred.
            this.toastrService.error('An unexpected error happened. ' + error.messager, 'Error', { onActivateTick: true });
            console.error('An error occurred:', error.message);
        }
    };
    AppErrorHandler = __decorate([
        core_1.Injectable()
    ], AppErrorHandler);
    return AppErrorHandler;
}());
exports.AppErrorHandler = AppErrorHandler;
//# sourceMappingURL=app.error-handler.js.map