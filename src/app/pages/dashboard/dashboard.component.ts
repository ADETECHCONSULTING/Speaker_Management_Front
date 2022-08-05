import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  select: EventEmitter<Date> = new EventEmitter();
  selectedValue: Date;

}
