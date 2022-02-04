import { Component, OnInit } from '@angular/core';
import { YoutubeVideoDataViewModel } from 'src/app/shared/models/YoutubeVideoDataViewModel';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  isSongPlaying: boolean;
  
  armedVideo: YoutubeVideoDataViewModel;

  constructor() { 
    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
  }

  ngOnInit(): void {
    this.initializeControlPanel();
  }

  initializeControlPanel() {
    this.isSongPlaying = false;
  }

  armVideo(video: YoutubeVideoDataViewModel) {
    this.armedVideo = video;
  }

  //#region Control Panel Callbacks
  onPlayButtonClick() {
    this.isSongPlaying = true;
  }
  
  onPauseButtonClick() {
    this.isSongPlaying = false;
  }
  //#endregion
}
