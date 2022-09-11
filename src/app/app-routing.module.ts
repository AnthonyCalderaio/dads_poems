import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemCardComponent } from './components/poem-card/poem-card.component'; 
import { PoemListComponent } from './components/poem-list/poem-list.component';
import { AddPoemComponent } from './components/add-poem/add-poem.component';

const routes: Routes = [
  { path: '', component: PoemListComponent },
  { path: 'poems/:poemTitle', component: PoemCardComponent },
  { path: 'addPoem', component: AddPoemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
// export const routingComponents = [PoemCardComponent]