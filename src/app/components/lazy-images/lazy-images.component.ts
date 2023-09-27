import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-images',
  templateUrl: './lazy-images.component.html',
  styleUrls: ['./lazy-images.component.css']
})
export class LazyImagesComponent implements OnInit {
  @Input() public imageUrl!:string;
  @Input() public imageTags!:string;
  hasLoaded:boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(!this.imageUrl) throw Error("Image required")
  }

  onLoad(){
    this.hasLoaded=true;
  }
}
