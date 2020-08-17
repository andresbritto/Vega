import { Component, OnInit } from '@angular/core';
import { Vehicle, KeyValuePair } from '../../models/vehicle';
import { VehicleService } from '../../Services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  allVehicles: Vehicle[];
  makes: KeyValuePair[];
  filter: any = {};

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getMakes()
      .subscribe(makes => this.makes = makes);

    //filtering on the Client
    //this.vehicleService.getVehicles()
    //  .subscribe(vehicles => this.vehicles = this.allVehicles = vehicles);

    //filtering on the Server
    this.populateVehicles();
  }

  //filtering on the Client
  //onFilterChange() {
  //  let vehicles = this.allVehicles;

  //  if (this.filter.makeId)
  //    vehicles = vehicles.filter(v => v.make.id == this.filter.makeId);

  //  if (this.filter.modelId)
  //    vehicles = vehicles.filter(v => v.model.id == this.filter.modelId);

  //  this.vehicles = vehicles;
  //}

  
  //filtering on the Server
  private populateVehicles() {
    this.vehicleService.getVehicles(this.filter)
      .subscribe(vehicles => this.vehicles = vehicles);
  }
  onFilterChange() {
    this.populateVehicles();
  }


  resetFilter() {
    this.filter = {};
    this.onFilterChange();
  }
}
