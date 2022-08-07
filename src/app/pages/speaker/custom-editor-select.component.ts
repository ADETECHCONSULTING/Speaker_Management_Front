import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  template: `
  <nb-select placeholder="Select Showcase" [(selected)]="selectedItem">
    <nb-option value="">Option empty</nb-option>
    <nb-option value="0">Option 0</nb-option>
    <nb-option value="1">Option 1</nb-option>
    <nb-option value="2">Option 2</nb-option>
    <nb-option value="3">Option 3</nb-option>
    <nb-option value="4">Option 4</nb-option>
  </nb-select>
  `,
})
export class CustomEditorSelectComponent extends DefaultEditor {
  selectedItem = '2';
  @ViewChild('name') name: ElementRef;
  @ViewChild('url') url: ElementRef;
  @ViewChild('htmlValue') htmlValue: ElementRef;

  constructor() {
    super();
  }

  updateValue(event) {
    this.cell.newValue = {name: this.name.nativeElement.value};
  }

}
