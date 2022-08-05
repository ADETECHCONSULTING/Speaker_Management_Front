import { NgModule } from '@angular/core';
import {NbCalendarKitModule, NbCardModule, NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SpeakerComponent } from './speaker/speaker.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CustomEditorComponent} from './speaker/custom-editor.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbCalendarKitModule,
  ],
  declarations: [
    PagesComponent,
    SpeakerComponent,
    CustomEditorComponent,
  ],
})
export class PagesModule {
}
