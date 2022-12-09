import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from '@core/services/player.service';
import { PositionService } from '@core/services/position.service';
import { InputComponent } from '@shared/components/atoms/input/input.component';
import { SelectComponent } from '@shared/components/atoms/select/select.component';
import { SliderComponent } from '@shared/components/atoms/slider/slider.component';

import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [ PlayerComponent, InputComponent, SelectComponent, SliderComponent, ],
      providers: [PlayerService,
        PositionService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
