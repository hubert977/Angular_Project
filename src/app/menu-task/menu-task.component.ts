import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import {Store} from '@ngrx/store'
import { addData } from '../DataApiStore/DataActions';
@Component({
  selector: 'app-menu-task',
  templateUrl: './menu-task.component.html',
  styleUrls: ['./menu-task.component.scss']
})

export class MenuTaskComponent implements OnInit {
  constructor(private GetData: GetDataService,private store: Store<{store}>) { }
  ngOnInit() {
  }
  Term: any
  Data: any
  Url: string = 'https://jsonplaceholder.typicode.com/posts';
  PushToStore($event)
  {
    this.store.dispatch(addData({payload: $event.target.value}))
  }
}
