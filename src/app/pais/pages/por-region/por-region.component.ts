import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  constructor(private paisService: PaisService) { }

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']; 
  regionActiva: string = '';
  paises: Country[] = [];

  getClaseCss(region: string):string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    if(region === this.regionActiva) {return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.porRegion(region)
      .subscribe((resp) => {
         this.paises = resp;
      });
  }

}
