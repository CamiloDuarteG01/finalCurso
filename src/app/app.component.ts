import { Component,Output,EventEmitter } from '@angular/core';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';
import { Producto } from 'src/utils/producto';
import { Receta } from 'src/utils/receta';
import { Restaurante } from 'src/utils/restaurante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gastronomia';
  //@Output() viewCultura = new EventEmitter<any>();

  activePage: string = 'main';

  activeRestaurante: Restaurante | null = null;
  activeProducto: Producto | null = null;
  activeReceta: Receta | null = null;
  activeculturaGastronomica: CulturaGastronomica | null = null;

  displayCulturaGastronomica(CulturaGastronomica: CulturaGastronomica) {
    this.activePage = 'CulturaGastronomica';
    this.activeculturaGastronomica = CulturaGastronomica;
  }

  displayRestaurante(Restaurante: Restaurante) {
    this.activePage = 'Restaurante';
    this.activeRestaurante = Restaurante;
  }

  displayProducto(Producto: Producto) {
    console.log('Hay que presentar Productoa')
    this.activePage = 'Producto';
    this.activeProducto = Producto;
  }

  displayReceta(Receta: Receta) {
    this.activePage = 'Receta';
    this.activeReceta = Receta;
  }

}
