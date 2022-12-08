import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input/input.component';
import { SliderComponent } from './components/atoms/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerCardComponent } from './components/molecules/player-card/player-card.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { FilterPlayersPipe } from './pipes/filter-players.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';


@NgModule({
  declarations: [
    InputComponent,
    SliderComponent,
    PlayerCardComponent,
    HeaderComponent,
    FilterPlayersPipe,
    ImgBrokenDirective,
  ],
  exports:[
    InputComponent,
    SliderComponent,
    PlayerCardComponent,
    HeaderComponent,
    FilterPlayersPipe,
    ImgBrokenDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
