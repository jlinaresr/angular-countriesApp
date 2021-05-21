import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';
  
  get httpParams(){
    return new HttpParams()
    .set(
      'fields', 'name;capital;alpha2Code;flag;population'
    );
  }
  
  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Pais[]>{
    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
    // Opción con operadores
    // return this.http.get( url )
    //   .pipe(
    //     catchError( err => of([]) )
    //   );
  }

  buscarPorCapital( termino: string ): Observable<Pais[]>{
    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } )
    .pipe(
      tap(console.log)
    );;
  }
  
  buscarPorCodigo( id: string ): Observable<Pais>{
    const url = `${ this.apiURL }/alpha/${ id }`;
    return this.http.get<Pais>( url );
  }

  buscarPorRegion( region: string ): Observable<Pais[]>{
    const url = `${ this.apiURL }/region/${ region }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } )
      .pipe(
        tap(console.log)
      );
  }
}
