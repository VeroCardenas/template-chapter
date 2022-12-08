import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '@models/player.model';


@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(value: Array<Player>, firstName: string): Player[] {
    return value.filter(word => word.firstName.toLowerCase().includes(firstName.toLowerCase()));
  }

}
