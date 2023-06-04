import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDescriptionText'
})
export class CustomDescriptionTextPipe implements PipeTransform {

  transform(string: string, limit: number): string {
    if (string.length > limit) {
      return string.slice(0, limit) + '...'
    }
      return string
  }

}
