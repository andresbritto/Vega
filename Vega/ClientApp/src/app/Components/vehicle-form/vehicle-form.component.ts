import * as _ from 'underscore'; 
import { Component, OnInit } from '@angular/core';
import { SaveVehicle, Vehicle } from './../../models/vehicle';
import { VehicleService } from '../../Services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})

export class VehicleFormComponent implements OnInit {
  makes;
  models;
  features;
  vehicle: SaveVehicle = {
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      email: '',
      phone: '',
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
    private toastrService: ToastrService) {

    route.params.subscribe(p => {
      this.vehicle.id = +p['id'] || 0;
    });
  }

  //ngOnInit(): void {
  //  if (this.vehicle.id)
  //    this.vehicleService.getVehicle(this.vehicle.id)
  //      .subscribe(v => {
  //        this.vehicle = v;
  //      }, err => {
  //        if (err.status == 404)
  //          this.router.navigate(['/home']);
  //      });

  //  this.vehicleService.getMakes()
  //    .subscribe((makes: object[]) => this.makes = makes);

  //  this.vehicleService.getFeatures()
  //    .subscribe((features: object[]) => this.features = features);
  //}

  ngOnInit() {
    let sources = [
      this.vehicleService.getMakes(),
      this.vehicleService.getFeatures(),
    ];

    if (this.vehicle.id)
      sources.push(this.vehicleService.getVehicle(this.vehicle.id));

    forkJoin(sources).subscribe((data: [object, object, Vehicle]) => {

      this.makes = data[0];
      this.features = data[1];

      if (this.vehicle.id) {
        this.setVehicle(data[2]);
        this.populateModels();
      }
              
    }, err => {
        if (err.status === 404)
         this.router.navigate(['/home']);
    });
  }

  private setVehicle(v: Vehicle) {
    
    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = _.pluck(v.features, 'id');

  }

  onMakeChange() {
    this.populateModels();
    delete this.vehicle.modelId;
  }

  private populateModels() {
    const selectedMake = this.makes.find(m => m.id === this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }

  onFeatureToggle(featureId, $event) {
    if ($event.target.checked)
      this.vehicle.features.push(featureId);
    else {
      let index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }

  submit() {
    const result$ = (this.vehicle.id) ? this.vehicleService.update(this.vehicle) : this.vehicleService.create(this.vehicle);
    result$.subscribe(vehicle => {
      this.toastrService.success('The vehicle was sucessfully updated.', 'Success');
      this.router.navigate(['/vehicles/', vehicle.id])
    });
  }

}
