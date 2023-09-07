import { Component, OnInit } from '@angular/core';
import { GastronomicLibraryService } from 'src/app/services/gastronomic-library.service';
import { CulturaGastronomica } from 'src/utils/culturaGastronomica';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private servicio:GastronomicLibraryService){}
   a :CulturaGastronomica[]=[];
  ngOnInit(): void {
    //  cargar la lista de héroes cuando el componente se inicializa
    this.cargarCulturas();

  }

  cargarCulturas() {

    // Utiliza el servicio para cargar la lista de héroes
    this.a = this.servicio.obtenerCulturasNombre();
    return this.a;

  }
}
