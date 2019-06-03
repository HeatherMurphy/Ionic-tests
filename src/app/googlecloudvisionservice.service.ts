import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GooglecloudvisionserviceService {
  constructor(public http: Http) { }
  googleCloudVisionAPIKey: 'AIzaSyDv7fv3It0bOBdRL9c_-Edc0YyCV-y_fX0';
  getLabels(base64Image) {
    const body = {
      "requests": [
        {
          "image": {
            "content": base64Image
          },
          "features": [
            {
              "type": "LABEL_DETECTION"
            }
          ]
        }
      ]
    }
    return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + this.googleCloudVisionAPIKey, body);
    }
}

