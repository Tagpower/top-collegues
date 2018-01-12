import { Pipe, PipeTransform } from '@angular/core';
import {Collegue} from '../domain/collegue';

@Pipe({
  name: 'filterByPseudo'
})

export class FilterByPseudoPipe implements PipeTransform {

  transform(value: Collegue[], args?: string): any {
    if (!args) {
      return value;
    } else {
      return value.filter(col => col.pseudo.toLowerCase().includes(args.toLowerCase()));
    }
  }

}
