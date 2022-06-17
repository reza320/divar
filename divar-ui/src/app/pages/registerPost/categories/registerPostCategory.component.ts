import { Component, ElementRef, Injector, Input, NgZone, ViewChild, ViewEncapsulation } from "@angular/core";
import { MapsAPILoader  } from '@agm/core';
import { DomSanitizer } from "@angular/platform-browser";
import { TaminPageBaseComponent } from "tamin-framework";

@Component({
  selector: 'app-register-post-category',
  templateUrl: './category.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../registerPost.scss']
})

export class RegisterPostCategory extends TaminPageBaseComponent{


@ViewChild('attachments') attachment: any;
@ViewChild('search') searchElementRef: ElementRef;


@Input() category;
overlay: string;
  listOfFiles: any=[];
  fileList: any=[];

  lat :number;
  lng : number;
  zoom:number;
  address: string;
  private geoCoder;

 

  constructor(injector: Injector,private sanitizer: DomSanitizer,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
    super(injector);
  }



  protected loadPageData() {
  }


  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
   this.setCurrentLocation();
   this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
  
  

   // Get Current Location Coordinates
  private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }




 markerDragEnd($event: google.maps.MouseEvent) {
    console.log($event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.getAddress(this.lat, this.lng);
  }



  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }


  removeSelectedFile(index) {
    this.listOfFiles.splice(index, 1);
    this.fileList.splice(index, 1);
  }


  showImage(e) {
    window.open(e.target.style, '_blank').focus();
  }



  onFileChanged(event: any) {
    if (this.listOfFiles.length > 19) {
      this.showErrorMessageBox('خطا', 'حداکثر 20 تصویر می توانید بارگزاری کنید')
      return false;
    }
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      if (selectedFile.size > 8000000) {
        this.showErrorMessageBox('خطا', 'حداکثر اندازه عکس 8 مگابایت می باشد')
        return false;
      }
      if (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/jpg'
        || selectedFile.type === 'image/png') {
        this.fileList.push(selectedFile);
        this.listOfFiles.push({
          'name': selectedFile.name,
          //this.sanitization.bypassSecurityTrustStyle(`url(${element.image})`);
          'src': this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(selectedFile))
        });
        }

      else {
        this.showErrorMessageBox('خطا', 'تنها تصاویر با فرمت jpg،jpeg و png مجاز هستند')
        return false;
      }
    }
    this.attachment.nativeElement.value = '';
  }




}

