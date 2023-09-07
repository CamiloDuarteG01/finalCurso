import { Component,Input, Output, EventEmitter } from '@angular/core';
import { GastronomicLibraryService } from 'src/app/services/gastronomic-library.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';
import { Producto } from 'src/utils/producto';
import { Receta } from 'src/utils/receta';

@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.css']
})
export class CulturaComponent {

  @Input() viewPagBarPrincipal: boolean=true;
  @Input() cultura: string = "";
  @Output() viewPagBarPrincipalChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  cambioPag() {
    this.viewPagBarPrincipal = !this.viewPagBarPrincipal; // Cambia el valor
    this.viewPagBarPrincipalChange.emit(this.viewPagBarPrincipal); // Emite el cambio
  }

  constructor(private servicio: GastronomicLibraryService) {}
  listaCulturas: CulturaGastronomica[] = [];
  listaRecetas: Receta[] = [];
  listaProductos: Producto[] = [];
  nombre:string="Italiana";
/*
  filtro():Producto[]{
    fProduct:Producto[]=this.servicio.LibraryCulturas.filter(x->{
    })
  }*/

  ngOnInit(): void {
    this.cargarCulturas();

  }

  cargarCulturas() {
    this.listaCulturas = this.servicio.LibraryCulturas;
    this.listaRecetas = this.servicio.LibraryRecetas;
    this.listaProductos = this.servicio.LibraryProductos;

  }


}
