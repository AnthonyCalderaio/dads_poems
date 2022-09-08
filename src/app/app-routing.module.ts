import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PoemCardComponent } from './components/poem-card/poem-card.component'; 
import { PoemListComponent } from './components/poem-list/poem-list.component';

const routes: Routes = [
  { path: '', component: PoemListComponent },
  { path: 'poems/:poemTitle', component: PoemCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
// export const routingComponents = [PoemCardComponent]