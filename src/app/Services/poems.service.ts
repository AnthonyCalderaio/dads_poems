import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { poems } from '../Mocks/mockPoems';
@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  constructor() { }

  getPoems(){
    return of(poems)
  }
}
