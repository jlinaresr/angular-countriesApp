import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  resultadoPaises: Pais[] = [];

  constructor( private paisService : PaisService ) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe( paises => {
        console.log(paises);
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
