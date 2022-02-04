import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { YoutubeVideoDataViewModel } from 'src/app/shared/models/YoutubeVideoDataViewModel';
import { FakeDataProviderService } from 'src/app/shared/services/fake-data-provider.service';
import { VideoRetrievalService } from 'src/app/shared/services/VideoRetrievalService.service';
import { SongCardComponent } from '../song-card/song-card.component';

@Component({
  selector: 'app-song-card-container',
  templateUrl: './song-card-container.component.html',
  styleUrls: ['./song-card-container.component.scss']
})
export class SongCardContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('song-card') songCard: SongCardComponent;

  activeVideoList: YoutubeVideoDataViewModel[] = [];
  activeVideo: YoutubeVideoDataViewModel;

  constructor(private videoRetrievalService: VideoRetrievalService,
              private dataProvider: FakeDataProviderService) { }

  ngOnInit(): void {
    this.convertUrlListToData(this.dataProvider.testUrlList);    
  }

  ngAfterViewInit(): void {
    
  }

  convertUrlListToData(urlList: string[]) {

    urlList.forEach(url => {
      let newData = new YoutubeVideoDataViewModel();

      this.videoRetrievalService.getVideoDataFromUrl(url, newData);
      this.activeVideoList.push(newData);
    })

    console.log(this.activeVideoList);
  }

}
