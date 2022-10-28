import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input/input.component';
import { SliderComponent } from './components/atoms/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerCardComponent } from './components/molecules/player-card/player-card.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';


@NgModule({
  declarations: [
    InputComponent,
    SliderComponent,
    PlayerCardComponent,
    HeaderComponent,
    FilterListPipe,
    ImgBrokenDirective,
  ],
  exports:[
    InputComponent,
    SliderComponent,
    PlayerCardComponent,
    HeaderComponent,
    FilterListPipe,
    ImgBrokenDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
