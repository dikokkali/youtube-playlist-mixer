import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})

export class SongCardComponent implements OnInit, AfterViewInit {

  YTPlayer: any;
  apiLoaded: boolean = false;
  
  public videoLinkUrl: string;    

  @Input('title') songTitle: string;
  @Input('embedID') videoEmbedId: string;

  videoPlayerConfig = {
    controls: 0,
    mute: 0,
    autoplay: 0
  }  

  constructor() { this.videoLinkUrl = "https://www.youtube.com/embed/pWahNIMRxR0"; }

  ngOnInit(): void { 

    if (!this.apiLoaded) {

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }  

  ngAfterViewInit() {
  
  }

  playSelectedSong() {

  }

  //#region Youtube CallBacks
  onPlayerReady(e: any) {
    console.log(e);
    // e.target.loadVideoById(this.videoEmbedId);
    e.target.cueVideoById(this.videoEmbedId);
    
  }

  onPlayerStateChange(e: any)
  {
    console.log("STATE CHANGE",e);

    if (e.data === 5)
    {
      console.log("CUED");
      e.target.isMuted = true;
      e.target.playVideo();     
    }
  }
 
  //#endregion
}
