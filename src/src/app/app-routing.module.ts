import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeIndexComponent } from './home/home-index.component';
import { SanchezCarrionIndexComponent } from './sanchezcarrion/sanchezcarrion-index.component';
import { ListsIndexComponent, ListsMatrixComponent } from './lists';
import { JudgementsIndexComponent, JudgementsCandidatesComponent } from './judgements';
import { HomeFormatoMatrizComponent } from './home/home-formatomatriz.compontent';

const routes: Routes = [
  { path: 'home', component: HomeIndexComponent },
  { path: 'formatomatriz', component: HomeFormatoMatrizComponent },
  { path: 'sanchezcarrion', component: SanchezCarrionIndexComponent },
  { path: 'results', component: ListsIndexComponent },
  { path: 'results/:code', component: ListsMatrixComponent },
  { path: 'judgements', component: JudgementsIndexComponent },
  { path: 'judgements/:code', component: JudgementsCandidatesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/results' }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 0],
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
