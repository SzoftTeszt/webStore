import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { Environments } from './environments';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TeniszutoComponent } from './teniszuto/teniszuto.component';
import { ImagesViewComponent } from './images-view/images-view.component';
import { onAppInit } from './initializer';
import { ConfigService } from './config.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UploadListComponent,
    UploadFormComponent,
    NavComponent,
    HomeComponent,
    ProductsListComponent,
    TeniszutoComponent,
    ImagesViewComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory:  onAppInit,
    multi:true,
    deps:[ConfigService, HttpClient]

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
