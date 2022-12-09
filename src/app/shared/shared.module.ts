import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input.component';
import { SliderComponent } from './components/atoms/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerCardComponent } from './components/molecules/player-card/player-card.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { FilterPlayersPipe } from './pipes/filter-players.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { SelectComponent } from './components/atoms/select/select.component';
import { ModalComponent } from './components/atoms/modal/modal.component';
import { PlayerComponent } from './components/molecules/player/player.component';


@NgModule({
  declarations: [
    InputComponent,
    SliderComponent,
    PlayerCardComponent,
    HeaderComponent,
    FilterPlayersPipe,
    ImgBrokenDirective,
    SelectComponent,
    ModalComponent,
    PlayerComponent,
  ],
  exports:[
    InputComponent,
    SliderComponent,
    PlayerCardComponent,
    HeaderComponent,
    FilterPlayersPipe,
    ImgBrokenDirective,
    SelectComponent,
    ModalComponent,
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
