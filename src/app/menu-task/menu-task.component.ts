import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
@Component({
  selector: 'app-menu-task',
  templateUrl: './menu-task.component.html',
  styleUrls: ['./menu-task.component.scss']
})

export class MenuTaskComponent implements OnInit {
  showsearch: boolean = false;
  searchfilter: string;
  constructor(private GetData: GetDataService) { }
  ngOnInit() {
  }
  Data: any 
  Url: string = 'https://jsonplaceholder.typicode.com/posts';
  ShowMenu($event)
  {
    this.GetData.FetchData(this.Url).subscribe((data)=>{
    this.Data = data;
    });
  }

}
