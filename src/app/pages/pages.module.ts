import { NgModule } from '@angular/core';
import {NbButtonModule, NbCalendarKitModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbListModule, NbMenuModule, NbSelectModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SpeakerComponent } from './speaker/speaker.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CustomEditorButtonComponent} from './speaker/custom-editor-button.component';
import { SpeechComponent } from './speech/speech.component';
import { AssemblyComponent } from './assembly/assembly.component';
import { ThemeComponent } from './theme/theme.component';
import { CustomEditorSelectComponent } from './speaker/custom-editor-select.component';
import { CustomEditorComponent } from './speaker/custom-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectSpeechesDialogComponent } from './dialogs/select-speeches.dialog/select-speeches.dialog.component';
import { CommonModule } from '@angular/common';
import { CustomEditorEmptyComponent } from './speaker/custom-editor-empty.component';
import { HistorySpeechComponent } from './history-speech/history-speech.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ReactiveFormsModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbCalendarKitModule,
    NbSelectModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbListModule,
    NbCheckboxModule,
    NbIconModule,
  ],
  declarations: [
    PagesComponent,
    SpeakerComponent,
    CustomEditorComponent,
    SpeechComponent, 
    ThemeComponent, 
    AssemblyComponent,
    CustomEditorSelectComponent,
    CustomEditorButtonComponent,
    SelectSpeechesDialogComponent,
    CustomEditorEmptyComponent,
    HistorySpeechComponent,
  ],
  entryComponents: [
    SelectSpeechesDialogComponent
  ]
})
export class PagesModule {
}
