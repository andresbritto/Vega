"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlErrorsDirective = void 0;
var core_1 = require("@angular/core");
var default_errors_1 = require("../Models/default-errors");
var control_error_component_1 = require("../Components/control-error/control-error.component");
var ControlErrorsDirective = /** @class */ (function () {
    function ControlErrorsDirective(resolver, vcr, control, errors) {
        this.resolver = resolver;
        this.vcr = vcr;
        this.control = control;
        this.errors = errors;
    }
    ControlErrorsDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription =
            this.control.valueChanges
                .subscribe(function (e) {
                console.log("error", _this.control);
                var controlErrors = _this.control.errors;
                if (controlErrors && _this.control.touched) {
                    var firstKey = Object.keys(controlErrors)[0];
                    var getError = _this.errors[firstKey];
                    var text = getError(controlErrors[firstKey]);
                    _this.setError(text);
                }
                else if (_this.ref) {
                    _this.setError(null);
                }
            });
    };
    ControlErrorsDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ControlErrorsDirective.prototype.setError = function (text) {
        if (!this.ref) {
            var factory = this.resolver.resolveComponentFactory(control_error_component_1.ControlErrorComponent);
            this.ref = this.vcr.createComponent(factory);
        }
        this.ref.instance.text = text;
    };
    ControlErrorsDirective = __decorate([
        core_1.Directive({
            selector: '[ngModel]'
        }),
        __param(2, core_1.Self()),
        __param(3, core_1.Inject(default_errors_1.FORM_ERRORS))
    ], ControlErrorsDirective);
    return ControlErrorsDirective;
}());
exports.ControlErrorsDirective = ControlErrorsDirective;
//# sourceMappingURL=control-errors.directive.js.map