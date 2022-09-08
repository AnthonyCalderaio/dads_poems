import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dads-poems';
  // poems: Poem[];
  // cardOptions: Array<boolean> = []

  constructor() { }

  

  ngOnInit() {
    // this.poemService.getAllPoems().subscribe((poems: Poem[]) => {
    //   this.poems = poems;
    // })

  }
  // toggleCard(index: number) {
  //   this.cardOptions[index] = !this.cardOptions[index];
  // }
}
