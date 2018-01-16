import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avis'
})
export class AvisPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    switch (value) {
      case "aimer":
        return "aime";
      case "pasAimer":
        return "n'aime pas";
      case "adorer":
        return "ADORE";
      case "detester":
        return "DÉTESTE"
      default:
        return "???";
    }
  }

}
