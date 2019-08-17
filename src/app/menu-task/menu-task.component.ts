import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import {Store, select} from '@ngrx/store'
import { addData, AddDataArray, ChangeStateTyping } from '../DataApiStore/DataActions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-task',
  templateUrl: './menu-task.component.html',
  styleUrls: ['./menu-task.component.scss','./rwd/768.scss']
})

export class MenuTaskComponent implements OnInit {
  constructor(private GetData: GetDataService,private store: Store<{store}>, private router: Router) { }
  ShowSearch: Boolean = true;
  isActive: Boolean = null;
  Term: any
  Data: any
  Url: string = 'https://jsonplaceholder.typicode.com/posts';
  ngOnInit() {
    this.GetData.FetchData(this.Url).subscribe(data=>{
      this.store.dispatch(AddDataArray({DataArray: data}))
    })
   this.store.select('apidata').subscribe(data => {
     this.ShowSearch = data.dataapi.ShowSearch;
   })
  }
  PushToStore($event)
  {
    this.store.dispatch(addData({FilterData: $event.target.value}))
    this.store.dispatch(ChangeStateTyping({ShowStateArray: true}))
  }
  ShowMenu()
  {
    this.isActive = !this.isActive
  }
}
