import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../services/get-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store'
@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {
  NumberPageClick: any;
  NumberPageEnter: any;
  DataList: any;
  CheckArray: any
  term: any
  ArrayPages = []
  TotalPage = []
  PaginationData = []
  AllDataDivide = []
  constructor(private GetDataService: GetDataService,private activeRoute: ActivatedRoute, private router: Router,private store: Store<{ state }>) { }
  Url: string = 'https://jsonplaceholder.typicode.com/posts'; //send request to api 
  ngOnInit() {
    this.FetchData();
  }
  ngAfterViewChecked()		
  {
    this.store.select('apidata','payload').subscribe((data)=>{
      setTimeout((data)=>{
        this.term = data;
      },1)
    })
    
  }
  FetchData()
  {
    this.GetDataService.FetchData(this.Url).subscribe((data)=>{
      this.DataList = data;
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
  InsertPageNumbers(data)
  {
    data.forEach(element => {
    this.ArrayPages.push(element.id);
    });
    for(let i=1; i<=this.ArrayPages.length/5; i=i+1)
    {
      this.TotalPage.push(i);
    }
  }
  ChangePage($event)
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

  
}
