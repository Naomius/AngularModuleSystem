import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPrice'
})
export class CustomPricePipe implements PipeTransform {

  transform(price: number, string: string): string {
    return `Цена: ${price} ${string}`
  }

}
