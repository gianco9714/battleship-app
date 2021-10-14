import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { CoreRoutingModule } from './core-routing.module';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { MatchHistoryComponent } from './pages/match-history/match-history.component';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BControlsComponent, ControlsComponent, PControlsComponent } from './components/controls/controls.component';
import { BFieldComponent, FieldComponent, PFieldComponent } from './components/field/field.component';
import { PreparingComponent } from './pages/preparing/preparing.component';
import { ShipsComponent } from './pages/preparing/ships/ships.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './services/player.service';
import { DragndropService } from './services/dragndrop.service';


@NgModule({
  declarations: [
    SidenavComponent,
    InicioComponent,
    ConfigurationComponent,
    MatchHistoryComponent,
    PlayGameComponent,
    NotFoundComponent,
    PreparingComponent,
    ShipsComponent,
    FieldComponent,
    ControlsComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    UiModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [    
    PlayerService,
    DragndropService
  ]
})
export class CoreModule { }
