import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/servicio/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resp: any;
  constructor(private cookieService: CookieService, private loginService: LoginService) { }

  ngOnInit() {
    if (this.cookieService.get("etiquetaT-cookie")) {

      this.resp = this.loginService.getToken();
      console.log("Estoy aqui");
    };
  }

}
