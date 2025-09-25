import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // return (value as number) * (value as number);

    return "Pay After Placement Program";
  }

}
