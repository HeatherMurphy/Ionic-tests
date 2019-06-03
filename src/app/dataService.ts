import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
    unSubdata: any;
    photoData: Observable<any>;
    query: string;
    baseUrl: string;
    picUrl: string;
    ocrBaseUrl: string;
    APIkey = 'AIzaSyDv7fv3It0bOBdRL9c_-Edc0YyCV-y_fX0';

    constructor(private httpClient: HttpClient) {

    }

    get_unSub() {
        this.baseUrl = 'https://test-15ee9.firebaseio.com/' + this.query + '.json';
        this.unSubdata = this.httpClient.get(this.baseUrl);
        console.log(this.unSubdata);
        return this.unSubdata;
    }

    send_pic(pic: any) {
        this.ocrBaseUrl = 'https://vision.googleapis.com/v1/images:annotate?key=' + this.APIkey;
        this.photoData = this.httpClient.post(this.ocrBaseUrl, pic);
        return this.photoData;
    }

}
