import { Component, OnInit } from '@angular/core';
import { MakeService } from '../../Services/make.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {
  makes;

  constructor(private makeService: MakeService) { }

  ngOnInit(): void {
    this.makeService.getMakes().subscribe(makes => {
      this.makes = makes;
      console.log("MAKES", this.makes);
    });
  }

}
