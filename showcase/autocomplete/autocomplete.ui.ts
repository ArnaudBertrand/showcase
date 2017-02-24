import {Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';

const template = `
<!-- Autocomplete -->
<div class="filter">
    <input class="input" type="text" placeholder="Filter" [(ngModel)]="search" />
</div>
<div class="list">
  <ul class="container" #containerRef>
      <li *ngFor="let item of filterList(search, list)" class="item" role="option" #itemRef
          (click)="valueChange.emit(item)">
          <div [innerHTML]="highlightMatch(item, search)"></div>
      </li>
  </ul>
</div>
`;

@Component({
  selector: 'ui-autocomplete',
  styles: [require('./autocomplete.ui.scss')],
  template: template,
})
export class UiAutocomplete {
  @ViewChild ('containerRef') container: ElementRef;
  @ViewChildren ('itemRef') items: QueryList<any>;
  @Input() list;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  search: string;

  filterList(search: string, list: string []) {
    if (typeof search !== 'string' || search.length === 0) {
      return list;
    }

    const regexp = new RegExp(search, 'im');
    return list.filter(item => (regexp.test(item)));
  }

  highlightMatch(text, search) {
    let regex = new RegExp(search, 'gi');
    return text.replace(regex, '<strong>$&</strong>' );
  }
}
