import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule, APP_ROUTING } from './app-routing.module';

import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from "ng2-file-upload";

//components
import { LoginComponent } from './components/login/login.component';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { RouterModule } from '@angular/router';
import { EtiquetaComponent } from './components/etiqueta/etiqueta.component';
import { DemoMaterialModule } from '../../material-module';

import { from } from 'rxjs';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { HeaderComponent } from './components/header/header.component';


import { NgxPayPalModule } from 'ngx-paypal';
import { CarritoComponent } from './components/carrito/carrito.component';

import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { FileSelectDirective } from 'ng2-file-upload';


import * as jwt_decode from 'jwt-decode';

import { HomeComponent } from './components/home/home.component';
import { AltaUsuarioAdminComponent } from './components/alta-usuario-admin/alta-usuario-admin.component';
import { CambioContraseniaComponent } from './components/cambio-contrasenia/cambio-contrasenia.component';


//import {DemoMaterialModule} from '@angular/material/DemoMaterialModule';
import { ValidarContraDirective } from './components/shared/validar-contra.directive';
import { AltaCategoriaComponent } from './components/alta-categoria/alta-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarritoComponent,
    ImagenesComponent,
    FileSelectDirective, 
    LoginComponent,
    AltausuarioComponent,
    ImagenesComponent,
    FileSelectDirective,
    PlantillaComponent,
    HomeComponent,
    AltaUsuarioAdminComponent,
    CambioContraseniaComponent,
    ValidarContraDirective,
    EtiquetaComponent,
    AltaCategoriaComponent
  ],
  entryComponents: [],
  imports: [
    NgxPayPalModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    APP_ROUTING,
    //Descomentar si no funciona file upload en etiqueta
    // FileUploadModule, 
    IonicModule.forRoot(), 
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'cdnimages-hechosdraps' }),

  ],
  providers: [
    CookieService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
