import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  toastrService;

  constructor(private ngZone: NgZone, private injector: Injector) {
  }

  handleError(error: any): void {
    this.toastrService = this.injector.get(ToastrService);
    if (error instanceof HttpErrorResponse) {
      //Backend returns unsuccessful response codes such as 404, 500 etc.
      this.ngZone.run(() => {
        this.toastrService.error('An unexpected error happened. ' + error.message, 'Error' /*, { onActivateTick: true }*/);
      });
      
      console.error('Backend returned status code: ', error.status);
      console.error('Response body:', error.message);
    } else {
      //A client-side or network error occurred.
      this.toastrService.error('An unexpected error happened. ' + error.messager, 'Error', { onActivateTick: true });
      console.error('An error occurred:', error.message);      
    }

  }

} 
