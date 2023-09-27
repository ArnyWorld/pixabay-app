import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

  image:string = "";
  constructor(private _imageService:ImagesService) { }

  ngOnInit(): void {
  }

  searchImages(){
    if(this.image.trim() === ""){
      this._imageService.setError("add image name");
      return;
    }
    else{
      this._imageService.sendSearchTerm(this.image);
      this.image = "";
    }
  }

}
