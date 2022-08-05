import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'app/services/speech.service';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomEditorComponent } from '../speaker/custom-editor.component';

@Component({
  selector: 'speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent {


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Intitulé',
        type: 'string',
      },
      theme: {
        title: 'Theme',
        valuePrepareFunction: (theme) => {
          return theme.name;
        },
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SpeechService) {
    this.service.getAll().subscribe(res => {
      this.source.load(res);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(() => {
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

  onAddConfirm(event): void {
    this.service.create(event.newData).subscribe(() => {
      event.confirm.resolve();
    });
  }

  onEditConfirm(event): void {
    this.service.update(event.newData.id, event.newData).subscribe(() => {
      event.confirm.resolve();
    });
  }
}
