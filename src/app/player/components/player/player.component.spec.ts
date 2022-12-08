import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DELETEDRESPONSEMOCK } from '@core/mocks/deleted-response.mock';
import { PLAYERSMOCK } from '@core/mocks/player.mock';
import { PlayerService } from '@core/services/player.service';
import { FilterPlayersPipe } from '@shared/pipes/filter-players.pipe';
import { of } from 'rxjs';

import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let playerService: PlayerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerComponent, FilterPlayersPipe],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      providers: [PlayerService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    playerService = TestBed.inject(PlayerService);
    jest.spyOn(playerService, 'getPlayers').mockReturnValue(of(PLAYERSMOCK));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fill list of players', () => {
    expect(playerService.getPlayers).toHaveBeenCalled();
    expect(component.players).toStrictEqual(PLAYERSMOCK);
  });

});
