import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(PaginationData: any[], term: any): any {
        return typeof term !== 'undefined' 
           ? PaginationData.filter(data => data.title.indexOf(term) )
           : PaginationData;
    }
}