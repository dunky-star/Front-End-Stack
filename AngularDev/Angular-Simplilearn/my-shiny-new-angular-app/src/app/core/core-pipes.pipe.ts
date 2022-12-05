import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'corePipes'
})
export class CorePipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
