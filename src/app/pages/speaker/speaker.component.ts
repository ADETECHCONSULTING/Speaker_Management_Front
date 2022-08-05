import { Component } from '@angular/core';
import {UserService} from '../../@core/mock/users.service';
import {LocalDataSource} from 'ng2-smart-table';
import {CustomEditorComponent} from './custom-editor.component';

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
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      user: {
        title: 'Nom',
        type: 'string',
        valuePrepareFunction: (user) => {
          return user.name;
        },
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      },
      type: {
        title: 'Type',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: UserService) {
    this.service.getContacts().subscribe(res => {
      this.source.load(res);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
