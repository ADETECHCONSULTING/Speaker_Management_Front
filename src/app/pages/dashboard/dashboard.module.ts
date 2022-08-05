import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NbButtonModule, NbCalendarKitModule, NbCardModule, NbInputModule, NbStepperModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbStepperModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
