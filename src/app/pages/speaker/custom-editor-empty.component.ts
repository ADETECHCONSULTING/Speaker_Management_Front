import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';

@Component({
  template: ``,
})
export class CustomEditorEmptyComponent extends DefaultEditor {

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    
  }

}
