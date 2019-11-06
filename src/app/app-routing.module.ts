import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginComponent } from './components/login/login.component';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AltaUsuarioAdminComponent } from './components/alta-usuario-admin/alta-usuario-admin.component';
import { CambioContraseniaComponent } from './components/cambio-contrasenia/cambio-contrasenia.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { EtiquetaComponent } from './components/etiqueta/etiqueta.component';
import { AltaCategoriaComponent } from './components/alta-categoria/alta-categoria.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';

const APP_ROUTES: Routes = [
  { path: 'altaCategoria', component: AltaCategoriaComponent},
  { path: 'plantilla', component: PlantillaComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'registro', component: AltausuarioComponent },
  { path: '', component:LoginComponent },
  { path: 'home', component:HomeComponent},
  { path: 'altaAdmin', component:AltaUsuarioAdminComponent},
  { path: 'cambioContrasenia', component:CambioContraseniaComponent},
  { path: 'app-imagenes', component: ImagenesComponent },
  { path: 'etiqueta', component: EtiquetaComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
