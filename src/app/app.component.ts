import { Component, OnInit } from '@angular/core';
import { Poem } from 'src/models/poem.model';
import { PoemsService } from './Services/poems.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dads-poems';
  poems: Poem[];
  cardOptions: Array<boolean> = []

  constructor(private poemService: PoemsService) { }

  

  ngOnInit() {
    this.poemService.getPoems().subscribe((poems: Poem[]) => {
      this.poems = poems;
    })

  }
  // toggleCard(index: number) {
  //   this.cardOptions[index] = !this.cardOptions[index];
  // }
}
