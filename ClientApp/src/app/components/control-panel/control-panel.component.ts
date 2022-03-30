import { Component, OnInit } from '@angular/core';
import { YoutubeVideoDataViewModel } from 'src/app/shared/models/YoutubeVideoDataViewModel';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  isSongPlaying: boolean;
  
  armedVideo: YoutubeVideoDataViewModel;

  constructor(private dataService: DataSharingService) { 

    // Bindings
    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
  }

  ngOnInit(): void {

    this.initializeControlPanel();

    // TODO: Remove below, testing only
    let testVideo = new YoutubeVideoDataViewModel();

    testVideo.videoEmbedId = 'U5rLz5AZBIA';
    testVideo.videoEmbedUrl = 'https://www.youtube.com/embed/U5rLz5AZBIA';
   
    this.armVideo(testVideo);

    // Subscribe to events
    this.dataService.songPlayingEvent.subscribe( result => this.isSongPlaying = true);
    this.dataService.songStoppedEvent.subscribe( result => this.isSongPlaying = false);
  }

  initializeControlPanel() {
    this.isSongPlaying = false;
  }

  armVideo(video: YoutubeVideoDataViewModel) {

    this.dataService.armedVideo = video;
  }

  //#region Control Panel Callbacks
  onPlayButtonClick() {
    
    this.dataService.playClicked();
    this.isSongPlaying = true;
  }

  onPauseButtonClick() {

    this.dataService.playClicked();
    this.isSongPlaying = false;
  }
  
  //#endregion
}
