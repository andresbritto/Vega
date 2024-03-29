import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavmenuComponent } from './Components/navmenu/navmenu.component';
import { VehicleFormComponent } from './Components/vehicle-form/vehicle-form.component';

import { VehicleService } from './Services/vehicle.service';
import { AppErrorHandler } from './app.error-handler';
import { VehicleListComponent } from './Components/vehicle-list/vehicle-list.component';
import { PaginationComponent } from './Components/shared/pagination/pagination.component';
import { ViewVehicleComponent } from './Components/view-vehicle/view-vehicle.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { ControlErrorsDirective } from './Directives/control-errors.directive';
import { ControlErrorComponent } from './Components/control-error/control-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavmenuComponent,
    VehicleFormComponent,
    VehicleListComponent,
    PaginationComponent,
    ViewVehicleComponent,
    ControlErrorsDirective,
    ControlErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'andresbritto.us.auth0.com',
      clientId: 'LGOPsidQEtBJRxyQ8vKd32E30KxAWwkc'
    }),
  ],
  providers: [
    AppErrorHandler,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
