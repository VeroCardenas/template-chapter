import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PLAYERSMOCK } from '@core/mocks/player.mock';
import { PlayerService } from '@core/services/player.service';
import { FilterPlayersPipe } from '@shared/pipes/filter-players.pipe';
import { of } from 'rxjs';

import { PlayerListComponent } from './player-list.component';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;
  let playerService: PlayerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerListComponent, FilterPlayersPipe],
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
    fixture = TestBed.createComponent(PlayerListComponent);
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
