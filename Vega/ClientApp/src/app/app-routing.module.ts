import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleFormComponent } from './Components/vehicle-form/vehicle-form.component';
import { HomeComponent } from './Components/home/home.component';
import { VehicleListComponent } from './Components/vehicle-list/vehicle-list.component';
import { ViewVehicleComponent } from './Components/view-vehicle/view-vehicle.component';
import { AuthGaurdService } from './Services/auth-gaurd.service';


const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles/new', component: VehicleFormComponent, canActivate: [ AuthGaurdService ] },
  { path: 'vehicles/edit/:id', component: VehicleFormComponent },
  { path: 'vehicles/:id', component: ViewVehicleComponent },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
