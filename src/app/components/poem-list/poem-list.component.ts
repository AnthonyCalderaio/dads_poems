import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from 'src/models/poem.model';
import { PoemsService } from 'src/app/Services/poems.service';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit {

  constructor(private router: Router, private poemService: PoemsService) { }
  poems: Poem[];
  title = 'dads-poems';
  cardOptions: Array<boolean> = []


  ngOnInit() {
    this.poemService.getAllPoems().subscribe((poems: Poem[]) => {
      console.log(poems)
      this.poems = poems;
    })
  }


  keepOrder = (a, b) => {
    return a;
  }

  navigateToPoem(poemTitle) {
    this.router.navigate(['/poems', poemTitle])
  }

}
