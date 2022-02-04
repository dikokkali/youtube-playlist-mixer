import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SongCardContainerComponent } from './components/song-card-container/song-card-container.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { VideoRetrievalService } from './shared/services/VideoRetrievalService.service';
import { SafePipe } from './shared/pipes/SafePipe';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { DataSharingService } from './shared/services/data-sharing.service';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    SongCardComponent,
    SongCardContainerComponent,
    SafePipe,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,      
    NgbModule,
    YouTubePlayerModule
  ],
  providers: [VideoRetrievalService, DataSharingService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
