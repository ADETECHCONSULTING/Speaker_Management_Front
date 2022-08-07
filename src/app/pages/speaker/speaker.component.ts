import { Component } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import { SpeakerService } from 'app/services/speaker.service';
import { zip } from 'rxjs';
import { AssemblyService } from 'app/services/assembly.service';
import { CustomEditorButtonComponent } from './custom-editor-button.component';
import { SpeechService } from 'app/services/speech.service';
import { NbDialogService } from '@nebular/theme';
import { SelectSpeechesDialogComponent } from '../dialogs/select-speeches.dialog/select-speeches.dialog.component';
import { CustomEditorEmptyComponent } from './custom-editor-empty.component';

@Component({
  selector: 'ngx-speaker-table',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent {

  assemblies = [];
  speechesRefs = [];

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
        title: 'Prénom',
        type: 'string',
      },
      assembly: {
        title: 'Assemblée',
        valuePrepareFunction: (assembly) => {
          return assembly.name;
        },
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: this.assemblies,
            valuePrepareFunction: (assembly) => {
              return assembly.name;
            },
          },
        },
      },
      button: {
        type: 'custom',
        editable: false,
        width: '10%',
        renderComponent: CustomEditorButtonComponent,
        onComponentInitFunction: instance => {
          instance.save.subscribe(row => {
            this.dialogService.open(SelectSpeechesDialogComponent, {
              context: {
                title: `Liste des discours présentable par ${row.firstname}`,
                list: this.speechesRefs,
                speaker: row
              },
            })
          });
        },
        editor: {
          type: 'custom',
          component: CustomEditorEmptyComponent
        },
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private speakerService: SpeakerService,
     private assemblyService: AssemblyService,
     private speechService: SpeechService,
     private dialogService: NbDialogService) {
    zip(this.speakerService.getAll(), this.assemblyService.getAllNames(), this.speechService.getAll()).subscribe(res => {
      this.source.load(res[0]);
      this.assemblies = res[1];
      this.speechesRefs = res[2];
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.speakerService.delete(event.data.id).subscribe(() => {
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

  onAddConfirm(event): void {
    this.speakerService.create(event.newData).subscribe(() => {
      event.confirm.resolve();
    });
  }

  onEditConfirm(event): void {
    this.speakerService.update(event.newData).subscribe(() => {
      event.confirm.resolve();
    });
  }
}
