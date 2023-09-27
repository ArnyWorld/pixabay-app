import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {
  error: string = "";
  state:boolean = false;
  suscripcion:Subscription
  constructor(private _imageService:ImagesService) { 
    this.suscripcion = this._imageService.getError().subscribe(res=>{
      this.showMessage();
      this.error = res;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  showMessage(){
    this.state= true;
    setTimeout(()=>{
      this.state = false;
    }, 2000);
  }

}
