import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeDataProviderService {

  readonly testUrlList = 
  [
    "https://www.youtube.com/watch?v=U5rLz5AZBIA",
    "https://www.youtube.com/watch?v=NRdHsuuXxfk",
    "https://www.youtube.com/watch?v=IpPbeWsLsEU"
    
  ]

  constructor() { }
}
