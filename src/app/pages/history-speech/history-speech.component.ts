import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'app/services/speech.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'history-speech',
  templateUrl: './history-speech.component.html',
  styleUrls: ['./history-speech.component.scss']
})
export class HistorySpeechComponent {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      speaker: {
        title: 'Orateur',
        valuePrepareFunction: (speaker) => {
          return `${speaker.firstname} ${speaker.lastname}`;
        }
      },
      speech: {
        title: 'Discours',
        valuePrepareFunction: (speech) => {
          return speech.name;
        }
      },
      date: {
        title: 'Date',
        valuePrepareFunction: (date) => {
          let raw = new Date(date);

          const formatted = this.datePipe.transform(raw, 'dd MMM yyyy');
          return formatted; 
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SpeechService, private datePipe: DatePipe) {
    this.service.getHistory().subscribe(res => {
      this.source.load(res);
    });
  }

}
