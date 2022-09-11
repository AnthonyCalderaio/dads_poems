import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { PoemsService } from 'src/app/Services/poems.service';

@Component({
  selector: 'app-add-poem',
  templateUrl: './add-poem.component.html',
  styleUrls: ['./add-poem.component.css']
})
export class AddPoemComponent implements OnInit {
  addedPoem: boolean = false;
  successfulPost:boolean = false;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('poemTitle') poemTitle;
  @ViewChild('poemText') poemText;
  constructor(private _ngZone: NgZone, private poemsService: PoemsService) { }

  ngOnInit(): void {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  addPoem(poemTitle: string, poemText: string) {
    this.addedPoem = true;
    this.poemsService.addPoem(poemTitle,poemText).subscribe((res:any) => {
      console.log('Success');
      console.log(res)
      this.successfulPost = true;
      this.poemTitle.nativeElement.value = '';
      this.poemText.nativeElement.value = '';
    },err => {
      this.successfulPost = false;
    })
  }

}
