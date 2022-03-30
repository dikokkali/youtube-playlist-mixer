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

  constructor(private dataService: DataSharingService) { this.videoLinkUrl = "https://www.youtube.com/embed/pWahNIMRxR0"; }

  ngOnInit(): void { 

    if (!this.apiLoaded) {

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.dataService.playButtonClickedEvent.subscribe(res => {
      if (res.videoEmbedId == this.videoEmbedId)
      {
        this.playSong();
      }});

  }  

  ngAfterViewInit() { 
 
  }

  public playSong() {
    this.YTPlayer.playVideo();
  }

  public pauseSong() {
    this.YTPlayer.pauseVideo();  
  }

  //#region Youtube CallBacks
  onPlayerReady(e: any) {

    e.target.cueVideoById(this.videoEmbedId);  
  }

  onPlayerStateChange(e: any)
  {
    // if (e.data == YT.PlayerState.CUED)
    // {
    //   this.playSong();
    // }
  }
 
  //#endregion
}
