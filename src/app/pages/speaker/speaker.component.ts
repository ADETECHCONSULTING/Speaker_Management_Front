import { Component } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {CustomEditorComponent} from './custom-editor.component';
import { SpeakerService } from 'app/services/speaker.service';

@Component({
  selector: 'ngx-speaker-table',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent {

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
      firstname: {
        title: 'Nom',
        type: 'string',
      },
      lastname: {
        title: 'Type',
        type: 'string',
      },
      assembly: {
        valuePrepareFunction: (assembly) => {
          return assembly.name;
        },
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SpeakerService) {
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
