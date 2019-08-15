import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(PaginationData: any[], term: string): any {
        return PaginationData.filter(data => data);
    }
}