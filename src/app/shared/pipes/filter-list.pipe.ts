import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '@models/player.model';


@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: Array<Player>, args: string): any {
    return value.filter(word => word.firstName.toLowerCase().includes(args.toLowerCase()));
  }

}
