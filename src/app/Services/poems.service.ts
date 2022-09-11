import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { poems } from '../Mocks/mockPoems';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalVariables } from 'src/app/common/globals';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  viewedPoem = new ReplaySubject();

  constructor(private httpClient: HttpClient) { }

  getAllPoems() {
    if (GlobalVariables.onlineMode) {
      return this.httpClient.get(`http://localhost:3000/poems`)
    } else {
      return of(poems);
    }

  }

  getPoemByName(poemTitle: string) {
    if (GlobalVariables.onlineMode) {
      return this.httpClient.get(`http://localhost:3000/${poemTitle}`)
    }
    else {
      return of(poems.filter(poem => poem.title === poemTitle))
    }

  }

  addPoem(poemTitle: string, poemText: string) {
    if (GlobalVariables.onlineMode) {
      return this.httpClient.post(`http://localhost:3000/addPoem?title=${poemTitle}`, { text: poemText })
    } else {
      alert('App is in offline mode')
    }
  }

}
