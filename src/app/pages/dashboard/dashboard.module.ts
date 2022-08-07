import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NbButtonModule, NbCalendarKitModule, NbCalendarModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbStepperModule, NbUserModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { CalendarKitMonthCellComponent } from './calendar-kit-month-cell.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbStepperModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    NbListModule,
    FormsModule,
    NbUserModule,
    NbIconModule,
    NbCalendarKitModule,
  ],
  declarations: [
    DashboardComponent,
    CalendarKitMonthCellComponent,
  ],
})
export class DashboardModule { }
