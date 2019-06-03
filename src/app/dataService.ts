import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
    unSubdata: any;
    query: string;
    baseUrl: string;
    APIkey = 'AIzaSyDv7fv3It0bOBdRL9c_-Edc0YyCV-y_fX0';

    constructor(private httpClient: HttpClient) {

    }

    get_unSub() {
        this.baseUrl = 'https://test-15ee9.firebaseio.com/' + this.query + '.json';
        this.unSubdata = this.httpClient.get(this.baseUrl);
        console.log(this.unSubdata);
        return this.unSubdata;
    }

}
