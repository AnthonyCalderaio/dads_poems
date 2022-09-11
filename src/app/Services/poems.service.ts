import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { poems } from '../Mocks/mockPoems';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  viewedPoem = new ReplaySubject();

  constructor(private httpClient: HttpClient) { }

  getAllPoems() {
    return this.httpClient.get(`http://localhost:3000/poems`)
  }

  getPoemByName(poemTitle: string) {
    return this.httpClient.get(`http://localhost:3000/${poemTitle}`)
  }

  addPoem(poemTitle: string, poemText: string) {
    return this.httpClient.post(`http://localhost:3000/addPoem?title=${poemTitle}`,{text:poemText})
  }

}
