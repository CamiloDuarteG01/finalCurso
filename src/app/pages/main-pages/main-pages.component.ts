import { Component,Output,EventEmitter } from '@angular/core';
import { GastronomicLibraryService } from 'src/app/services/gastronomic-library.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPagesComponent {
  viewPagBarPrincipal : boolean = true;
  viewPagCultura : boolean = false;
  nombreCulturaSelec: string = "";

  //@Output() viewPagBarPrincipalChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  actualizarViewPagBarPrincipal(nuevoValor: boolean) {
    this.viewPagBarPrincipal = nuevoValor;
    this.viewPagCultura = !this.viewPagCultura
  }
  actualizarNombreCulturaSelec(nuevoNombre: string) {
    this.nombreCulturaSelec = nuevoNombre;
  }
  //[cultura]="nombreCulturaSelec"quitar


  constructor(private servicio:GastronomicLibraryService){}
  currentOption: string = 'search';

  changeOption(newOption: string) {
    this.currentOption = newOption
  }
  verServicio(){
    //console.log("Hola"+ this.servicio.LibraryCultures)
    return this.servicio;
  }

}
