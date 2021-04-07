import { Directive, OnInit, OnDestroy, Inject, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FORM_ERRORS } from '../Models/default-errors';
import { ControlErrorComponent } from '../Components/control-error/control-error.component';

@Directive({
  selector: '[ngModel]'
})
export class ControlErrorsDirective implements OnInit, OnDestroy {

  ref: ComponentRef<ControlErrorComponent>;

  subscription: Subscription;

  constructor(
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef,
    @Self() private control: NgControl,
    @Inject(FORM_ERRORS) private errors
  ) {
  }
  
  ngOnInit() {
    this.subscription =
      this.control.valueChanges
      .subscribe((e) => {
          console.log("error", this.control);
        const controlErrors = this.control.errors;
        if (controlErrors && this.control.touched) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.errors[firstKey];
          const text = getError(controlErrors[firstKey]);
          this.setError(text);
        }
        else if (this.ref) {
          this.setError(null);
        }
      })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.vcr.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

}
