"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var ngx_toastr_1 = require("ngx-toastr");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./Components/home/home.component");
var navmenu_component_1 = require("./Components/navmenu/navmenu.component");
var vehicle_form_component_1 = require("./Components/vehicle-form/vehicle-form.component");
var vehicle_service_1 = require("./Services/vehicle.service");
var app_error_handler_1 = require("./app.error-handler");
var vehicle_list_component_1 = require("./Components/vehicle-list/vehicle-list.component");
var pagination_component_1 = require("./Components/shared/pagination/pagination.component");
var view_vehicle_component_1 = require("./Components/view-vehicle/view-vehicle.component");
// Import the module from the SDK
var auth0_angular_1 = require("@auth0/auth0-angular");
var control_errors_directive_1 = require("./Directives/control-errors.directive");
var control_error_component_1 = require("./Components/control-error/control-error.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navmenu_component_1.NavmenuComponent,
                vehicle_form_component_1.VehicleFormComponent,
                vehicle_list_component_1.VehicleListComponent,
                pagination_component_1.PaginationComponent,
                view_vehicle_component_1.ViewVehicleComponent,
                control_errors_directive_1.ControlErrorsDirective,
                control_error_component_1.ControlErrorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                // Import the module into the application, with configuration
                auth0_angular_1.AuthModule.forRoot({
                    domain: 'andresbritto.us.auth0.com',
                    clientId: 'LGOPsidQEtBJRxyQ8vKd32E30KxAWwkc'
                }),
            ],
            providers: [
                app_error_handler_1.AppErrorHandler,
                { provide: core_1.ErrorHandler, useClass: app_error_handler_1.AppErrorHandler },
                vehicle_service_1.VehicleService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map