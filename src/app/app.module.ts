import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchImageComponent } from './components/search-image/search-image.component';
import { ListImagesComponent } from './components/list-images/list-images.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './shared/error/error.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LazyImagesComponent } from './components/lazy-images/lazy-images.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent,
    ListImagesComponent,
    NavbarComponent,
    ErrorComponent,
    SpinnerComponent,
    LazyImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
