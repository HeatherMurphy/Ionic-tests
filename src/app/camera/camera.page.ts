import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { GooglecloudvisionserviceService } from '../googlecloudvisionservice.service';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  photo: any;
  query: string;
  stuff: any;
  stuff2: any;
  constructor(private data: DataService, private camera: Camera, private vision: GooglecloudvisionserviceService) {}
  queryData() {
    this.query = 'Company';
    this.data.query = this.query;
    this.data.get_unSub().subscribe(data => {
    this.stuff = data;
    });
}
  postOcr() {

  }

  ngOnInit() {
    //this.takePhoto();
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      this.vision.getLabels(imageData).subscribe((result) => {
        this.photo(imageData, result.json().responses);
      }, (err) => {
      // Handle error
     })
    }
  }
}
