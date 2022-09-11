import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from 'src/models/poem.model';
import { PoemsService } from 'src/app/Services/poems.service';
import { poems } from 'src/app/Mocks/mockPoems';
import { GlobalVariables } from 'src/app/common/globals';

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
    if (GlobalVariables.onlineMode) {
      this.poemService.getAllPoems().subscribe((poems: Poem[]) => {
        this.poems = poems;
      })
    } else {
      this.poems = poems;
    }
  }


  keepOrder = (a, b) => {
    return a;
  }

  navigateToPoem(poemTitle) {
    this.router.navigate(['/poems', poemTitle])
  }

}
