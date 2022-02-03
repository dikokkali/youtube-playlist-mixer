import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})

export class SongCardComponent implements OnInit {

  public videoLinkUrl: string;  

  @Input('title') songTitle: string;
  @Input('embedURL') videoEmbedUrl: string;

  public songArtist: string;

  constructor() { this.videoLinkUrl = "https://www.youtube.com/embed/pWahNIMRxR0"; }

  ngOnInit(): void {
  }  
}
