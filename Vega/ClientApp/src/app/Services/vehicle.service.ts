import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle, SaveVehicle, KeyValuePair } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  private readonly vehiclesEndpoint = '/api/vehicles/';

  constructor(private http: HttpClient) { }

  getMakes() {
    return this.http.get <KeyValuePair[]>('/api/makes');
  }

  getFeatures() {
    return this.http.get('/api/features');
  }

  create(vehicle) {
    return this.http.post<Vehicle>(this.vehiclesEndpoint, vehicle);
  }

  update(vehicle: SaveVehicle) {
    return this.http.put<Vehicle>(this.vehiclesEndpoint + vehicle.id, vehicle);
  }

  delete(id) {
    return this.http.delete(this.vehiclesEndpoint + id);
  }

  getVehicle(id) {
    return this.http.get<Vehicle>(this.vehiclesEndpoint + id);
  }

  //filtering on the Client
  //getVehicles() {
  //  return this.http.get<Vehicle[]>(this.vehiclesEndpoint);
  //}

  //filtering on the Server
  getVehicles(filter) {
    return this.http.get<Vehicle[]>(this.vehiclesEndpoint + '?' + this.toQueryString(filter));
  }

  toQueryString(obj) {
    const parts = [];
    for (const property in obj) {
      const value = obj[property];
      if (value !== null && value !== undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }
}
