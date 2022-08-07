import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <button nbButton fullWidth status="primary" (click)="onSpeechClick()"><nb-icon icon="book-open"></nb-icon></button>
  `,
})
export class CustomEditorButtonComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onSpeechClick() {
    this.save.emit(this.rowData);
  }

}
