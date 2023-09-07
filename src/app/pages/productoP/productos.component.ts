import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GastronomicLibraryService } from 'src/app/services/gastronomic-library.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';
import { Producto } from 'src/utils/producto';

@Component({
  selector: 'app-productoP',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductoPComponent implements OnInit {




  constructor(private servicio:GastronomicLibraryService){}
   productList :Producto[]=[];
  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productList = this.servicio.obtenerProductos();
    return this. productList;

  }
}
