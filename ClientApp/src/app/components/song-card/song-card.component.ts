import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})

export class SongCardComponent implements OnInit, AfterViewInit {
  @ViewChild('youtubePlayer', {static: true}) YTPlayer : YouTubePlayer;

  apiLoaded: boolean = false;
  
  public videoLinkUrl: string;    

  @Input('title') songTitle: string;
  @Input('embedID') videoEmbedId: string;

  videoPlayerConfig = {
    controls: 0,
    mute: 0,
    autoplay: 0
  }  

  constructor(private dataService: DataSharingService) 
  { 
    this.videoLinkUrl = "https://www.youtube.com/embed/pWahNIMRxR0"; 
  }

  ngOnInit(): void 
  { 
    this.InitializeYoutubePlayer();
    this.SubscribeToEvents();   
  }  

  ngAfterViewInit() { 
 
  }
  
  //#region Song Card Controls

  public playSong() {
    this.YTPlayer.playVideo();
  }

  public pauseSong() {
    this.YTPlayer.pauseVideo();  
  }

  //#endregion

  //#region Song Card Setup

  SubscribeToEvents()
  {
    this.dataService.playButtonClickedEvent.subscribe(videoData => this.onControlPanelPlaying(videoData));
  }

  InitializeYoutubePlayer()
  {
    if (!this.apiLoaded) {

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }  
  }

  //#endregion

  //#region Event Callbacks

  onControlPanelPlaying(e: any)
  {
    if (e.videoEmbedId == this.videoEmbedId)
      {        
        if (this.YTPlayer.getPlayerState() == YT.PlayerState.PLAYING)
        {
          this.pauseSong();
          this.dataService.songStoppedEvent.emit();
        }
        else if (this.YTPlayer.getPlayerState() == YT.PlayerState.PAUSED || this.YTPlayer.getPlayerState() == YT.PlayerState.CUED)
        {
          this.playSong();
          this.dataService.songPlayingEvent.emit();
        }       
      }
  }  

  //#endregion

  //#region Youtube Callbacks

  onPlayerReady(e: any) 
  {
    //e.target.cueVideoById(this.videoEmbedId);  
  }

  onPlayerStateChange(e: any)
  {
    
  }
 
  //#endregion
}
