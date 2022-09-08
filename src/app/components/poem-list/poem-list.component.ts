import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from 'src/models/poem.model';
import { PoemsService } from 'src/app/Services/poems.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit {

  constructor(private router: Router,private poemService: PoemsService, private httpClient: HttpClient) { }
  poems: Poem[];
  title = 'dads-poems';
  cardOptions: Array<boolean> = []

  

  ngOnInit() {
    this.poemService.getPoems().subscribe((poems: Poem[]) => {
      this.poems = poems;
    })
    console.log('getting from api');
    this.httpClient.get('http://localhost:3000/poems').subscribe(res => {
      console.log(res)
    })

  }


  keepOrder = (a, b) => {
    return a;
  }

  navigateToPoem(poemTitle) {
    console.log('clicked')
    this.router.navigate(['/poems',poemTitle])
  }

}
