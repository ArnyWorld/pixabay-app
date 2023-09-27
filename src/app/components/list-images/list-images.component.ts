import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
  suscripcion:Subscription
  listImages:any[]=[];
  term:string = "";
  loading:boolean=false;
  imagesPerPage:number = 30;
  pageCurrent:number = 1;
  calculatePage:number = 0;
  title:String = "";

  constructor(private _imagesService:ImagesService) {
    this.suscripcion = this._imagesService.getSearchTerm().subscribe(res=>{
      this.term = res;
      this.loading = true;
      setTimeout(()=>{
        this.getImages();
        this.loading = false;
      },2000)
    })
  }


  getImages(){
    this._imagesService.getImages(this.term, this.imagesPerPage, this.pageCurrent).subscribe(data=>{
      this.loading = false;
      if(data.hits.length === 0){
        this._imagesService.setError('Not found');
        return;
      }
      else{
        this.calculatePage = Math.ceil(data.totalHits / this.imagesPerPage);
        this.listImages = data.hits;
        this.title = `Resultado de la busqueda: ${this.term}`
      }
     console.log(data);
   }, error=>{
    this._imagesService.setError("Error")
    this.loading = false;
   })
  }

  pageBefore(){
    this.pageCurrent--;
    this.loading = true;
    this.listImages = [];
    this.getImages();
  }
  pageNext(){
    this.pageCurrent++;
    this.loading = true;
    this.listImages = [];
    this.getImages();
  }


  ngOnInit(): void {
  }

}
