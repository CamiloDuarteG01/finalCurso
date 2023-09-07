import { Producto } from "./producto";
import { Paises } from "./recursos";
import { Receta } from "./receta";
import { Restaurante } from "./restaurante";

export class CulturaGastronomica{

  nombre:string;
  descripcion:string;
  paisDeCultura:Paises[];
  recetas:Receta[];
  productos:Producto[];
  restaurantes:Restaurante[];

  constructor(nombre:string,descripcion:string,pais:Paises[]){
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.paisDeCultura=pais;
    this.recetas=[];
    this.productos=[];
    this.restaurantes=[];
  }

  addPais(pais:Paises){
    this.paisDeCultura.push(pais);
  }
  addReceta(receta:Receta){
    this.recetas.push(receta);
  }
  addRestaurante(restau:Restaurante){
    this.restaurantes.push(restau);
  }
  addProduto(producto:Producto){
    this.productos.push(producto);
  }
  getRecetas(): Receta[] {
    return this.recetas;
  }
  getProductos(): Producto[] {
    return this.productos;
  }
  getRestaurantes(): Restaurante[] {
    return this.restaurantes;
  }


}



