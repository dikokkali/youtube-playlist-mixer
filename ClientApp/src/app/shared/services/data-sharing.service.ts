import { EventEmitter, Injectable, Output } from '@angular/core';

import { YoutubeVideoDataViewModel } from '../models/YoutubeVideoDataViewModel';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  @Output() playButtonClickedEvent = new EventEmitter<YoutubeVideoDataViewModel>();
  @Output() pauseButtonClickedEvent = new EventEmitter<YoutubeVideoDataViewModel>();

  public armedVideo: YoutubeVideoDataViewModel;

  constructor() { }

  playClicked() {

    this.playButtonClickedEvent.emit(this.armedVideo);
  }

  pauseClicked() {

    this.pauseButtonClickedEvent.emit(this.armedVideo);
  }

}
