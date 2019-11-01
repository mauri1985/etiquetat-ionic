import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { LoginComponent } from './components/login/login.component';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AltausuarioComponent, AppComponent,LoginComponent],
  entryComponents: [],
  imports: [RouterModule, FormsModule, ReactiveFormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    CookieService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
