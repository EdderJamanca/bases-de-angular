import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'mayuscula'
})

export class MayusculaPipe implements PipeTransform{

    transform(valor:string,enMayuscula:boolean=true): string{
        return (enMayuscula) ? valor.toUpperCase() : valor.toLowerCase();
    }

}