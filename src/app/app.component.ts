import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from 'src/app/common/globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dads-poems';
  globalVariables: any;

  constructor(private router: Router) {this.globalVariables = GlobalVariables }

  ngOnInit() { }

}
