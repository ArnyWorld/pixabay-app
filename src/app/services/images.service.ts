import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private error$ = new Subject<string>();
  private searchTerm$ = new Subject<string>();
  constructor(private _http:HttpClient) { }

  setError(message:string){
    this.error$.next(message);
  }

  getError():Observable<string>{
    return this.error$.asObservable();
  }
  
  sendSearchTerm(termino:string){
    this.searchTerm$.next(termino);
  }
  getSearchTerm():Observable<string>{
    return this.searchTerm$.asObservable();
  }

  getImages(term:string, imagesPerPage:number, pageCurrent:number):Observable<any>{
    const url= `${environment.baseUrl}&q=${term}&per_page=${imagesPerPage}&page=${pageCurrent}`;
    return this._http.get(url);
  }
}
