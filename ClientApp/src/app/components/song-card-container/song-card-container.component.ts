import { Component, OnInit } from '@angular/core';
import { YoutubeVideoDataViewModel } from 'src/app/shared/models/YoutubeVideoDataViewModel';
import { FakeDataProviderService } from 'src/app/shared/services/fake-data-provider.service';
import { VideoRetrievalService } from 'src/app/shared/services/VideoRetrievalService.service';

@Component({
  selector: 'app-song-card-container',
  templateUrl: './song-card-container.component.html',
  styleUrls: ['./song-card-container.component.scss']
})
export class SongCardContainerComponent implements OnInit {

  youtubeVideoList: YoutubeVideoDataViewModel[] = [];

  constructor(private videoRetrievalService: VideoRetrievalService,
              private dataProvider: FakeDataProviderService) { }

  ngOnInit(): void {

    this.convertUrlListToData(this.dataProvider.testUrlList);

  }

  convertUrlListToData(urlList: string[]) {

    urlList.forEach(url => {
      let newData = new YoutubeVideoDataViewModel();

      this.videoRetrievalService.getVideoDataFromUrl(url, newData);
      this.youtubeVideoList.push(newData);
    })

    console.log(this.youtubeVideoList);
  }

}
