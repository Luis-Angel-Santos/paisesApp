import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent{

  constructor(private paisService: PaisService) { }

  termino:string = '';
  error:boolean = false;
  paises: Country[] = [];
  
  buscar(termino: string){
    this.error = false;
    this.termino = termino
    console.log(this.termino);
    this.paisService.porCapital(termino)
      .subscribe((resp) => {
        console.log(resp);
        this.paises = resp;
        console.log(this.paises);
         
      }, (err) => {
        this.error = true;
        this.paises = [];
      })
  }

}
