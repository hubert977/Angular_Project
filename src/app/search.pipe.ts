import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(PaginationData: any[], term: any): any {
        if(typeof term  === 'undefined')
        {
          return PaginationData
        }
        if(term == null)
        {
          return PaginationData
        }
        return PaginationData.filter(data => data.title.indexOf(term) !== -1);
    }
}