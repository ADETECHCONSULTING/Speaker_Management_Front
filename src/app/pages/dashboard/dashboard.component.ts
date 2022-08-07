import {Component, ElementRef, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpeakerService } from 'app/services/speaker.service';
import { SpeechService } from 'app/services/speech.service';
import { CalendarKitMonthCellComponent } from './calendar-kit-month-cell.component';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  speechesAvailable = [];
  speakersAvailable = [];
  targetDate = new Date();
  selectedSpeech;
  selectedSpeaker;
  deadline = new Date();
  monthCellComponent = CalendarKitMonthCellComponent;
  @ViewChild('stepper') stepper: ElementRef;
  
  constructor(
    private fb: FormBuilder,
    private speechService: SpeechService,
    private speakerService: SpeakerService
    ) {
      this.speechService.getAll().subscribe(res => {
        this.speechesAvailable = res;
      })
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
    this.speakerService.getAll().subscribe(res => {
      this.speakersAvailable = res;
    })
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  onSpeechClick(speech) {
    this.selectedSpeech = speech;
    this.firstForm.get('firstCtrl').setValue(speech);
  }

  onSpeakerClick(speaker) {
    this.selectedSpeaker = speaker;
    this.secondForm.get('secondCtrl').setValue(speaker);
  }

  saveRequest() {
    let data = {
      date: this.targetDate,
      speech: this.selectedSpeech,
      speaker: this.selectedSpeaker
    }
    this.speechService.createHistory(data).subscribe(() => {
      (this.stepper as any).reset();
    });
  }

}
