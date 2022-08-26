import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { }

  termino:string = '';
  error:boolean = false;
  paises: Country[] = [];

  buscar(termino: string){
    this.error = false;
    this.termino = termino
    console.log(this.termino);
    this.paisService.buscarPais(termino)
      .subscribe((resp) => {
        console.log(resp);
        this.paises = resp;
        console.log(this.paises);
         
      }, (err) => {
        this.error = true;
        this.paises = [];
      })
  }

  sugerencias(termino:string){
    this.error = false;
  }

}
