import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent{

  terminoCondiciones:boolean=false;

  persona ={
    genero:'',
    notificaciones:false
    
  }


}
