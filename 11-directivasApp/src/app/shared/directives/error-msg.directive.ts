import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color:string="red";
  private _mensaje:string="Este mensaje es requerido";

  htmlElement:ElementRef<HTMLElement>;
  
  @Input() set  color(valor:string){
    
    this._color=valor;
    this.setColor();


  }
  @Input() set mensaje(valor:string){

    this._mensaje=valor;
    this.ingresarContenido();

  }
  @Input() set valid(valor:boolean){
    if(!valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }

  }

  constructor(private el:ElementRef<HTMLElement>) {
  
    this.htmlElement=el;
   }
  
  ngOnInit(): void {
    this.  setStilo();
    this.setColor();
    this.ingresarContenido();
    
  }

  setStilo():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor():void{
    this.htmlElement.nativeElement.style.color=this._color;

  }
  ingresarContenido(){
    this.htmlElement.nativeElement.innerHTML=this._mensaje;
  }

}
