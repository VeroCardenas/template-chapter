import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './services/player.service';
import { PositionService } from './services/position.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    PlayerService,
    PositionService,

  ]
})
export class CoreModule { }
