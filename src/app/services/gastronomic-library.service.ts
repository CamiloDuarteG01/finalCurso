import { Injectable } from '@angular/core';
import { CulturaGastronomica } from "src/utils/culturaGastronomica";
import { LIBRARY_PRODUCTOS, LIBRARY_CULTURES, LIBRARY_RECETAS, LIBRARY_RESTAURANTES } from "src/utils/data-load";
import { Producto } from "src/utils/producto";
import { Receta } from "src/utils/receta";
import { Restaurante } from "src/utils/restaurante";

@Injectable({
  providedIn: 'root'
})
export class GastronomicLibraryService {
  LibraryProductos: Producto[] = LIBRARY_PRODUCTOS;
  LibraryCulturas: CulturaGastronomica[] = LIBRARY_CULTURES;
  LibraryRecetas: Receta[] = LIBRARY_RECETAS;
  LibraryRestaurantes: Restaurante[] = LIBRARY_RESTAURANTES;

  constructor() { }
/*
  obtenerCulturasNombre(): string[] {
    return this.LibraryCulturas.map(cultura => cultura.nombre);
  }*/
  obtenerCulturasNombre(): CulturaGastronomica[] {
    return this.LibraryCulturas;
  }


  obtenerProductos(): Producto[] {
    return this.LibraryProductos;
  }

  obtenerRecetas(): Receta[] {
    return this.LibraryRecetas;
  }

  obtenerRestaurantes(): Restaurante[] {
    return this.LibraryRestaurantes;
  }
}

