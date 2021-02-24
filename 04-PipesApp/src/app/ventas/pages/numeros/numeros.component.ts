import { Component} from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent  {

  constructor() { }

  totalDeVenta:number=2456789.1589;
  ventaDelDia:number=0.456;


}
