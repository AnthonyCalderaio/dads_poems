import { Component, Input, OnInit } from '@angular/core';
import { Poem } from 'src/models/poem.model';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit {
  @Input() poems: Poem[];

  constructor() { }

  ngOnInit(): void {
  }

  keepOrder = (a, b) => {
    return a;
  }

}
