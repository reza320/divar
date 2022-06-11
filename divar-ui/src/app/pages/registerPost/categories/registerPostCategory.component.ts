import { Component, Injector, Input, ViewChild, ViewEncapsulation } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Urls } from "src/settings/urls";
import { TaminPageBaseComponent } from "tamin-framework";
import {} from 'googlemaps';

@Component({
  selector: 'app-register-post-category',
  templateUrl: './category.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../registerPost.scss']
})

export class RegisterPostCategory extends TaminPageBaseComponent{


@ViewChild('attachments') attachment: any;
@ViewChild('map') mapElement: any;


@Input() category;
overlay: string;
  listOfFiles: any=[];
  fileList: any=[];

  map: google.maps.Map;

  constructor(injector: Injector,private sanitizer: DomSanitizer) {
    super(injector);
  }



  protected loadPageData() {
  }


  initializePage() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
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

