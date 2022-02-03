import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { YoutubeVideoDataViewModel } from "../models/YoutubeVideoDataViewModel";

@Injectable({
    providedIn: 'root'
})

export class VideoRetrievalService {

    readonly extractorUrlPrefix = "https://noembed.com/embed?url=";
    readonly embedUrlPrefix = "https://www.youtube.com/embed/";

    constructor(private http: HttpClient)
    {
        
    }

    getVideoDataFromUrl(url: string, videoData: YoutubeVideoDataViewModel)
    {
        let youtubeObject;

        const params = new HttpParams();

        this.http.get<any>(this.extractorUrlPrefix + url, { params })
        .subscribe(result => { 
            youtubeObject = result;

            videoData.videoEmbedUrl = this.createEmbedUrl(youtubeObject.url);
            videoData.videoTitle = youtubeObject.title;   
        } );        
    }

    createEmbedUrl(url: string) : string {
        
        var youtubeId = "";
        var videoId = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

        if(videoId != null) {  
            youtubeId = videoId[1];
        } else { 
            console.log("The youtube url is not valid.");
        }

        return this.embedUrlPrefix + youtubeId;
    }
}

