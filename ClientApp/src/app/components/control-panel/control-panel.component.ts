import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  isSongPlaying: boolean;

  constructor() { 
    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
  }

  ngOnInit(): void {
    this.initializeControlPanel();
  }

  initializeControlPanel() {
    this.isSongPlaying = false;
  }

  onPlayButtonClick() {
    this.isSongPlaying = true;
  }
  
  onPauseButtonClick() {
    this.isSongPlaying = false;
  }
}
