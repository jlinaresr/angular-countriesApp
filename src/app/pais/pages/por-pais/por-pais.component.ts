import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  resultadoPaises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService : PaisService ) { }

  buscar( termino: string){
    console.log(termino)
    this.hayError = false;
    this.mostrarSugerencias = false;
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
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.paisService.buscarPais( termino )
      .subscribe( paises => {
        this.paisesSugeridos = paises.splice(0, 10)
      }, (err) => this.paisesSugeridos = []);
  }

}
