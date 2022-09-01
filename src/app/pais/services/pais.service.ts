import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  private apiUrl:string = 'https://restcountries.com/v3.1'

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  porCapital(termino:string):Observable<Country[]>{
      const url = `${this.apiUrl}/capital/${termino}`;
      return this.http.get<Country[]>(url);
  }

  porCodigo(termino:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country>(url);
  }

  porRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }
  

  

}
