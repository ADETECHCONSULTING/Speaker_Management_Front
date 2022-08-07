import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { SpeakerService } from 'app/services/speaker.service';
import { SpeechService } from 'app/services/speech.service';

@Component({
  selector: 'select-speeches-dialog',
  templateUrl: './select-speeches.dialog.component.html',
  styleUrls: ['../dialog-common.scss']
})
export class SelectSpeechesDialogComponent implements OnInit {

  title?: String;
  list = [];
  newArray = [];
  speaker ?: any;

  constructor(
    protected dialogRef: NbDialogRef<SelectSpeechesDialogComponent>,
    private speakerService: SpeakerService
    ) { }

  ngOnInit(): void {

  }

  getCheckboxValues(ev, data) {
    if (ev) {
      // Pushing the object into array
      this.newArray.push(data);

    } else {

      let removeIndex = this.newArray.findIndex(itm => itm.id === data.id);

      if (removeIndex !== -1)
        this.newArray.splice(removeIndex,1);

    }
  }

  speakerAlreadyHasSpeech(speech) {
    if (this.speaker.speeches.map(it => it.id).includes(speech.id)) {
      this.newArray.push(speech);
      return true;
    }
    else {
      return false;
    }
  }

  close() {
    this.speaker.speeches = this.newArray;
    this.speakerService.update(this.speaker).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
