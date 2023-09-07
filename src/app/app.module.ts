import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { CulturaComponent } from './pages/cultura/cultura.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BarraDeNavegacionPrincipalComponent } from './components/barra-de-navegacion-principal/barra-de-navegacion-principal.component';

import { ProductoPComponent } from './pages/productoP/productos.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPagesComponent,
    CulturaComponent,
    RecetaComponent,

    RestauranteComponent,
    BusquedaComponent,
    BarraDeNavegacionPrincipalComponent,
    ProductoPComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
