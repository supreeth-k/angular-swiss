import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-defaultpage',
  templateUrl: './defaultpage.component.html',
  styleUrls: ['./defaultpage.component.css']
})
export class DefaultpageComponent implements OnInit {

  constructor(router: Router, actRoute: ActivatedRoute ) { }

  ngOnInit() {
  }

}
