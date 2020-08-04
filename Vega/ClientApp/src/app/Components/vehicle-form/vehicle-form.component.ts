import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../Services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  features: any[];
  vehicle: any = {};

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getMakes().subscribe((makes: object[]) => this.makes = makes);
    this.vehicleService.getFeatures().subscribe((features: object[]) => this.features = features);
  }

  onMakeChange() {
    let selectedMake = this.makes.find(m => m.id === this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }

}
