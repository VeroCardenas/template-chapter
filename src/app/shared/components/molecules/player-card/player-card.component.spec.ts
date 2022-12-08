import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DELETEDRESPONSEMOCK } from '@core/mocks/deleted-response.mock';
import { PLAYERSMOCK } from '@core/mocks/player.mock';
import { PlayerService } from '@core/services/player.service';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { of } from 'rxjs';

import { PlayerCardComponent } from './player-card.component';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;
  let playerService: PlayerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardComponent, ImgBrokenDirective ],
      imports: [HttpClientTestingModule],
      providers: [PlayerService]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.player = PLAYERSMOCK[0];
  });

  beforeEach(() => {
    playerService = TestBed.inject(PlayerService);
    jest.spyOn(playerService, 'deletePlayer').mockReturnValue(of(DELETEDRESPONSEMOCK));
    jest.spyOn(component.playerDeleted, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('delete player when click on delete button', () => {
    const { debugElement } = fixture;
    const deleteImg = debugElement.query(
      By.css('[data-testid="delete-img"]')
    );
    deleteImg.triggerEventHandler('click', null);
    fixture.detectChanges()

    expect(playerService.deletePlayer).toHaveBeenCalled();
    expect(component.playerDeleted.emit).toHaveBeenCalled();
  });

});
