import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { EtiquetaComponent } from './components/etiqueta/etiqueta.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: AltausuarioComponent},
  { path: 'etiqueta', component: EtiquetaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
