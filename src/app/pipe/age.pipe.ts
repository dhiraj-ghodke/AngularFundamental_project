import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let date = value as Date;
    let today = new Date();

    return (today.getFullYear() - date.getFullYear()) + ' years ';
  }

}
