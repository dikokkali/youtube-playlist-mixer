import { EventEmitter, Injectable, Output } from '@angular/core';

import { YoutubeVideoDataViewModel } from '../models/YoutubeVideoDataViewModel';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  @Output() playButtonClickedEvent = new EventEmitter<YoutubeVideoDataViewModel>();

  @Output() songPlayingEvent = new EventEmitter<boolean>();
  @Output() songStoppedEvent = new EventEmitter<boolean>();

  // @Output() pauseButtonClickedEvent = new EventEmitter<YoutubeVideoDataViewModel>(); // Not necessary, button is a toggle

  public armedVideo: YoutubeVideoDataViewModel;

  constructor() { }

  playClicked() {

    this.playButtonClickedEvent.emit(this.armedVideo);
  }
}
