import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import {Store, select} from '@ngrx/store'
import { addData } from '../DataApiStore/DataActions';
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
   this.store.select('apidata').subscribe(data => {
     this.ShowSearch = data.dataapi.ShowSearch;
     console.log();
   })
  }
  PushToStore($event)
  {
    this.store.dispatch(addData({FilterData: $event.target.value}))
  }
  ShowMenu()
  {
    this.isActive = !this.isActive
  }
}
