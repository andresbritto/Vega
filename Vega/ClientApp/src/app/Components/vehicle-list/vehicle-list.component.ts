import { Component, OnInit } from '@angular/core';
import { Vehicle, KeyValuePair } from '../../models/vehicle';
import { VehicleService } from '../../Services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  private readonly PAGE_SIZE = 3; 

  queryResult:any = {
    totalItems: 0,
    items: []
  };

  allVehicles: Vehicle[];

  makes: KeyValuePair[];
  query:any = {
    pageSize: this.PAGE_SIZE
  };

  columns = [
    { title: 'Id' },
    { title: 'Contact Name', key: 'contactName', isSortable: true },
    { title: 'Make', key: 'make', isSortable: true },
    { title: 'Model', key: 'model', isSortable: true },
    {}
  ];

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
    this.vehicleService.getVehicles(this.query)
      .subscribe(result => this.queryResult = result);
  }

  onFilterChange() {
    this.query.page = 1; 
    this.populateVehicles();
  }

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE
    };
    this.populateVehicles();
  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending; 
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.populateVehicles();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateVehicles();
  }

}
