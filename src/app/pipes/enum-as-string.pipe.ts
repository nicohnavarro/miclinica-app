import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumAsString'
})
export class EnumAsStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
