import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { ChangeStateSearch } from '../DataApiStore/DataActions';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss','./rwd/768.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private store: Store<{store}>) { }
  ngOnInit() {
    this.store.dispatch(ChangeStateSearch({ShowSearch: false}))
  }
  scroll(target:HTMLElement)
  {
    target.scrollIntoView();
  }

}
