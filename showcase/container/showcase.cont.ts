import {ViewDirective} from '../directive/view.directive';
import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {find, propEq} from 'ramda';
import {components, IComponent} from '../components.def';

const template = `

<div class="banner">
    <span class="icon" icon="carrier-lufthansa" [iconfont]="true"></span>
    <span class="bannerTitle">DDS Lufthansa - Angular components showcase</span>
</div>

<ui-autocomplete
    class="autocomplete"
    (valueChange)="loadComponent($event, components)"
    [list]="getCompIds(components)"></ui-autocomplete>

<div class="container">
    <h1 class="title">{{currentComponent.id}}</h1>
    <div class="description" *ngIf="currentComponent.description">{{currentComponent.description}}</div>
    <div class="template">
        <template host></template>
    </div>
</div>
`;

@Component({
  selector: 'showcase',
  template: template,
  styles: [require('./showcase.cont.scss')],
})
export class ShowCase {
  @ViewChild(ViewDirective) adHost: ViewDirective;

  components = components;
  currentComponent: IComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent(this.components[0].id, this.components);
  }

  getCompIds = comps => comps.map(comp => comp.id);

  loadComponent(id, components) {
    const componentReq = find(propEq('id', id), components);

    this.currentComponent = componentReq;
    const componentRef = componentReq.component;

    const angularComponent = this.componentFactoryResolver.resolveComponentFactory(componentRef);

    const container = this.adHost.viewContainerRef;
    container.clear();

    const newComponent = container.createComponent(angularComponent);

    for (let [key, value] of componentReq.params) {
      (<any>newComponent).instance[key] = value;
    }
  }
}
