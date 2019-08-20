import { Component, OnInit, ɵConsole } from '@angular/core';
import {GetDataService} from '../services/get-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store'
import { ChangeStateSearch, AddDataArray } from '../DataApiStore/DataActions';
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
  StateSearchTyping: boolean
  Url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private GetDataService: GetDataService,private activeRoute: ActivatedRoute, private router: Router,private store: Store<{ state }>) { }
  ngOnInit() {
    this.FetchData();
    console.log(typeof this.activeRoute.snapshot.params.id);
    this.store.select('apidata').subscribe(data=>{
      this.term = data.dataapi.payload; 
      this.StateSearchTyping = data.dataapi.ShowStateArray 
      data.dataapi.ShowStateArray ? this.PaginationData = data.dataapi.DataArray : this.FetchData
    })
    this.store.dispatch(ChangeStateSearch({ShowSearch: true})) //show search input
    
  }
  ngOnDestroy() {
    this.store.dispatch(ChangeStateSearch({ShowSearch: false})) //hide search input
  }
  FetchData()  //send request to api 
  {
    this.PaginationData = []
      this.GetDataService.FetchData(this.Url).subscribe((data)=>{
      this.InsertPageNumbers(data);
      this.store.dispatch(AddDataArray({DataArray: data}))
      this.store.select('apidata').subscribe((data)=>{
        this.DataList = data.dataapi.DataArray
      })
      this.NumberPageEnter = this.activeRoute.snapshot.params.id;
      const InitialLoop = this.NumberPageEnter*5-5;
      const EndLoop = this.NumberPageEnter*5;
      for(let i=InitialLoop; i<EndLoop; i++)
      {
        this.PaginationData.push(this.DataList[i])
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
    const NumberRoute = Number(this.activeRoute.snapshot.params.id);
    const index = this.TotalPage.indexOf(NumberRoute)
    index == -1 ? this.router.navigate(['/404']) : 1 
  }
  ChangePage($event) // click number page
  {
    $event.stopPropagation();
    this.PaginationData=[]
    this.NumberPageClick = $event.target.innerText
    if($event.target.innerText == null)
    {
      this.NumberPageClick = $event.key
    }
    this.router.navigate([`data-table/${this.NumberPageClick}`])
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
