import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../services/get-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store'
import { ChangeStateSearch, AddDataArray } from '../DataApiStore/DataActions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss','./rwd/768.scss']
})
export class TablePaginationComponent implements OnInit {
  DataList: Array<any>
  ArrayPages: Array<any> = []
  TotalPage: Array<any> = []
  PaginationData: Array<any> = []
  AllDataDivide: Array<any> = []
  CheckArray: any;
  term: any;
  NumberPageClick: any;
  NumberPageEnter: any;
  ShowNumbersPages: boolean = true;
  ShowDataPagination: boolean = true;
  Url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private GetDataService: GetDataService,private activeRoute: ActivatedRoute, private router: Router,private store: Store<{ state }>) { }
  ngOnInit() {
    this.FetchData();
    this.store.select('apidata').subscribe((data)=>{
      this.term = data.dataapi.FilterData; 
    })
    this.store.dispatch(ChangeStateSearch({ShowSearch: true}))
  }
  ngOnDestroy() {
    this.store.dispatch(ChangeStateSearch({ShowSearch: false}))
  }
  FetchData()  //send request to api 
  {
  
    this.GetDataService.FetchData(this.Url).subscribe((data)=>{
      this.store.dispatch(AddDataArray({DataArray: data}))
      this.store.select('apidata').subscribe((data)=>{
        this.DataList = data.dataapi.DataArray
      })
      this.InsertPageNumbers(data);
      this.NumberPageEnter = this.activeRoute.snapshot.params.id;
      const InitialLoop = this.NumberPageEnter*5-5;
      const EndLoop = this.NumberPageEnter*5;
      for(let i=InitialLoop; i<EndLoop; i++)
      {
        this.PaginationData.push(this.DataList[i])
      }
      if(this.activeRoute.snapshot.params.id > this.TotalPage.length)
      {
        this.router.navigate(['/404']);
      }
    })
  }
  InsertPageNumbers(data) // count pages
  {
    data.forEach(element => {
    this.ArrayPages.push(element.id);
    });
    for(let i=1; i<=this.ArrayPages.length/5; i=i+1)
    {
      this.TotalPage.push(i);
    }
  }
  ChangePage($event) // click number page
  {
    $event.stopPropagation();
    this.PaginationData=[]
    this.NumberPageClick = $event.toElement.textContent
    const InitialLoop = this.NumberPageClick*5-5;
    const EndLoop = this.NumberPageClick*5
    for(let i=InitialLoop; i<EndLoop; i++)
    {
      this.PaginationData.push(this.DataList[i])
    }
  }
  EnterNumberPage($event) // page change after typing
  {
    $event.stopPropagation();
    this.PaginationData=[]
    this.NumberPageClick = $event.key
    const InitialLoop = this.NumberPageClick*5-5;
    const EndLoop = this.NumberPageClick*5
    for(let i=InitialLoop; i<EndLoop; i++)
    {
      this.PaginationData.push(this.DataList[i])
    }
  }
}
