import {Directive, ViewContainerRef} from '@angular/core';

@Directive({selector: '[host]'})
export class ViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
