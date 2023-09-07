import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { GastronomicLibraryService } from 'src/app/services/gastronomic-library.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';

@Component({
  selector: 'app-barra-de-navegacion-principal',
  templateUrl: './barra-de-navegacion-principal.component.html',
  styleUrls: ['./barra-de-navegacion-principal.component.css']
})
export class BarraDeNavegacionPrincipalComponent implements OnInit {

  @Input() viewPagBarPrincipal: boolean = true;
  //@Input() nombreCulturaSelec: string = "" ;
  @Output() viewPagBarPrincipalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() culturaMostrar: EventEmitter<string> = new EventEmitter<string>();

  tomarCultura(nombre: string){
    this.culturaMostrar.emit(nombre); // Emite el nombre de la cultura como cadena
  }

  cambioPag() {
     //this.nombreCulturaSelec=nombre.nombre
    this.viewPagBarPrincipal = !this.viewPagBarPrincipal; // Cambia el valor
    this.viewPagBarPrincipalChange.emit(this.viewPagBarPrincipal); // Emite el cambio
    //this.nombreCulturaSelec = nombre.nombre; // Cambia el nombre de la cultura

  }


  constructor(private servicio: GastronomicLibraryService) {}
  listaCulturas: CulturaGastronomica[] = [];

  ngOnInit(): void {
    this.cargarCulturas();
  }

  cargarCulturas() {
    this.listaCulturas = this.servicio.LibraryCulturas;
  }
}
