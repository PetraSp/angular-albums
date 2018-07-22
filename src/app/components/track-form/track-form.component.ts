import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-form',
  templateUrl: './track-form.component.html',
  styleUrls: ['./track-form.component.css']
})
export class TrackFormComponent implements OnInit {

  song = {
    trackName: '',
    trackTimeMillis: 0
  };
  
  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.song);
  }
}
