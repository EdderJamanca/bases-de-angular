
import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
    name:'imagen'
})

export class ImagePipe implements PipeTransform {

    transform(image: Heroe):string{

        if(!image.id && !image.alt_img){
            return "./assets/no-image.png";
        }else if(image.alt_img){
            return image.alt_img;
        }
        else{
            
            return `assets/heroes/${image.id}.jpg`;
        }

    }

}