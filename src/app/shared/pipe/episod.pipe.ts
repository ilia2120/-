import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episod',
  standalone: true,
})
export class EpisodPipe implements PipeTransform {
  transform(value: string, option: number = 0) {
    const data = value.split('/').slice(-2).join('/');
    return option === 0
      ? `${data[0].toUpperCase()}${data.slice(1)}`
      : data.replace(' ', '/');
  }
}
