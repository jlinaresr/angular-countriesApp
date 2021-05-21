import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino: string = '';
  hayError: boolean = false;

  resultadoPaises: Pais[] = [];

  constructor( private paisService : PaisService ) { }

  buscarPorCapital( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPorCapital(this.termino)
      .subscribe( paises => {
        console.log('Paises por capital: ', paises);
        this.resultadoPaises = paises; 
      }, ( err ) => {
          this.hayError = true;
          this.resultadoPaises = [];
      });
  }
  
  sugerencias( termino: string ){
    this.hayError = false;
  }

}
