import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import {MatchHistoryComponent} from './pages/match-history/match-history.component';
import {ConfigurationComponent} from './pages/configuration/configuration.component';
import {PlayGameComponent} from './pages/play-game/play-game.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PreparingComponent } from './pages/preparing/preparing.component';


const routes: Routes = [

  {
    path: '',
    component: InicioComponent,
    children: [
      {  path: '', redirectTo: 'play-game', pathMatch: 'full' },
      {  path: 'play-game', component: PreparingComponent },
      {  path: 'battle', component: PlayGameComponent },
      {  path: 'configuration', component: ConfigurationComponent },
      {  path: 'match-history', component: MatchHistoryComponent },
      {  path: '**', component: NotFoundComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
