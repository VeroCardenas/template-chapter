import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerListComponent } from './components/player-list/player-list.component';


@NgModule({
  declarations: [
    PlayerListComponent,
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PlayerModule { }
