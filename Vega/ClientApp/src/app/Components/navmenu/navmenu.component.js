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
exports.NavmenuComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent(document, auth) {
        this.document = document;
        this.auth = auth;
        this.isExpanded = false;
        this.auth.user$.subscribe(function (u) { return console.log(u); });
    }
    NavmenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavmenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavmenuComponent = __decorate([
        core_1.Component({
            selector: 'app-navmenu',
            templateUrl: './navmenu.component.html',
            styleUrls: ['./navmenu.component.scss']
        }),
        __param(0, core_1.Inject(common_1.DOCUMENT))
    ], NavmenuComponent);
    return NavmenuComponent;
}());
exports.NavmenuComponent = NavmenuComponent;
//# sourceMappingURL=navmenu.component.js.map