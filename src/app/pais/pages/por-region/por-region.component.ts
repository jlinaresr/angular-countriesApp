import { NullTemplateVisitor } from '@angular/compiler';
import { Component,  } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
          button{
            margin-right: 5px;
          }
        `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  resultadoPaises: Pais[] = [];

  constructor( private paisService: PaisService ) { }

  activarRegion( region: string ){
    if( this.regionActiva === region ) { return; }
    this.regionActiva = region;
    this.resultadoPaises = [];
    this.paisService.buscarPorRegion( region )
      .subscribe( paises => {
        this.resultadoPaises = paises
      });
      // console.log(this.resultadoPaises);
  }
  
  getClaseCSS( region: string ){
    return (this.regionActiva === region) ?
    'btn btn-primary' : 'btn btn-outline-primary';
  }
  
}
