import { Component, ViewEncapsulation } from "@angular/core";
import { TaminPageBaseComponent } from "tamin-framework";

@Component({
  selector: 'app-register-post',
  templateUrl: './registerPost.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./registerPost.scss']
})

export class RegisterPost extends TaminPageBaseComponent{

public categories=[];
category;
overlay: string;
showCategory:boolean=false;

  protected loadPageData() {
     this.overlay = this.showOverlay();
    this.restService.getAll('http://localhost:8089/categories')
    .then((val)=>{
       this.categories=val;
    }).catch(err=>{
      this.showInfoMessageBox('پیام سیستم', err);
    }).finally(() => {
            this.hideOverlay(this.overlay);
          });
  }


getSubCategories(id,code){
      this.overlay = this.showOverlay();
    this.restService.getAll('http://localhost:8089/categories/'+id+'/'+code)
    .then((val)=>{
      if(val instanceof Array)
         this.categories=val;
      else{
        this.category=val;
        this.showCategory=true;
      }
    }).catch(err=>{
      this.showInfoMessageBox('پیام سیستم', err);
    }).finally(() => {
      this.hideOverlay(this.overlay);
    });
}



}

 