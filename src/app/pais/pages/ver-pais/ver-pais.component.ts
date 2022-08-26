import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({id}) => this.paisService.porCodigo(id)),
      tap(console.log))
      .subscribe(pais => this.pais = pais[0]);
    /*this.activatedRoute.params
      .subscribe(({ id }) => {
        console.log(id);
        this.paisService.porCodigo(id)
          .subscribe(pais => {
            console.log(pais);
            
          })
      })*/
  }

  pais!: Country;

}
