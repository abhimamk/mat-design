import { Product } from 'src/app/classes/product';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], args: string): any {
    return value.filter(x => x.pro_name.indexOf(args)!=-1);
  }

}
