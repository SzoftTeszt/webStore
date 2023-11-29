import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    UploadListComponent,
    UploadFormComponent,
    NavComponent,
    HomeComponent,
    ProductsListComponent,
    TeniszutoComponent,
    ImagesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
