import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PoemsService } from 'src/app/Services/poems.service';
import { Poem } from 'src/models/poem.model';

@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.css']
})
export class PoemCardComponent implements OnInit {
  activePoem: String;

  constructor(private poemService: PoemsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let poemTitle = this.router.snapshot.paramMap.get('poemTitle')
    this.poemService.getPoemByName(poemTitle).subscribe((res: Poem) => {
      this.activePoem = res[0];
    })
  }

}
