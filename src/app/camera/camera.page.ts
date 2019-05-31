import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
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
  constructor(private data: DataService, private camera: Camera) {}
  queryData() {
    this.query = 'Company';
    this.data.query = this.query;
    this.data.get_unSub().subscribe(data => {
    this.stuff = data;
    });
}
  postOcr(){
    this.data.send_pic(this.photo).subscribe(data => {
    this.stuff2 = data;
    });
  }

  ngOnInit() {
    this.takePhoto();
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //this.photo = 'data:image/jpeg;base64,' + imageData;
      this.photo = imageData;
     }, (err) => {
      // Handle error
     });
    }

}
