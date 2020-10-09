import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  private isAuthenticated = false;
  constructor(private auth: AuthService) {
    this.auth.isAuthenticated$.subscribe(
      x => {
        this.isAuthenticated = x;
        console.log(this.isAuthenticated);
      }
    )
  }

  canActivate() {
    if (this.isAuthenticated)
      return true;
    
    console.log("canActivate", this.isAuthenticated);

    window.location.href = "https://localhost:44339/";

    return false;
  }
}
