import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { poems } from '../Mocks/mockPoems';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  viewedPoem = new ReplaySubject();

  constructor() { }

  getPoems(){
    return of(poems)
  }

}
