"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlErrorComponent = void 0;
var core_1 = require("@angular/core");
var ControlErrorComponent = /** @class */ (function () {
    function ControlErrorComponent(cdr) {
        this.cdr = cdr;
        this._hide = true;
    }
    Object.defineProperty(ControlErrorComponent.prototype, "text", {
        set: function (value) {
            if (value !== this._text) {
                this._text = value;
                this._hide = !value;
                this.cdr.detectChanges();
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    __decorate([
        core_1.Input()
    ], ControlErrorComponent.prototype, "text", null);
    ControlErrorComponent = __decorate([
        core_1.Component({
            selector: 'app-control-error',
            templateUrl: './control-error.component.html',
            styleUrls: ['./control-error.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], ControlErrorComponent);
    return ControlErrorComponent;
}());
exports.ControlErrorComponent = ControlErrorComponent;
//# sourceMappingURL=control-error.component.js.map