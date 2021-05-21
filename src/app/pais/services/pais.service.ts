import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Pais[]>{
    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<Pais[]>( url );
    // Opción con operadores
    // return this.http.get( url )
    //   .pipe(
    //     catchError( err => of([]) )
    //   );
  }

  buscarPorCapital( termino: string ): Observable<Pais[]>{
    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Pais[]>( url );
  }
  
  buscarPorCodigo( id: string ): Observable<Pais>{
    const url = `${ this.apiURL }/alpha/${ id }`;
    return this.http.get<Pais>( url );
  }
}
