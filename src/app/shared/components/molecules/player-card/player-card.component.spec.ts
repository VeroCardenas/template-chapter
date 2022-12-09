import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DELETEDRESPONSEMOCK } from '@core/mocks/deleted-response.mock';
import { PLAYERSMOCK } from '@core/mocks/player.mock';
import { PlayerService } from '@core/services/player.service';
import { InputComponent } from '@shared/components/atoms/input/input.component';
import { ModalComponent } from '@shared/components/atoms/modal/modal.component';
import { SelectComponent } from '@shared/components/atoms/select/select.component';
import { SliderComponent } from '@shared/components/atoms/slider/slider.component';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { of } from 'rxjs';
import { PlayerComponent } from '../player/player.component';

import { PlayerCardComponent } from './player-card.component';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;
  let playerService: PlayerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardComponent, ImgBrokenDirective, PlayerComponent, ModalComponent,SliderComponent, InputComponent, SelectComponent ],
      imports: [HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
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

  it('delete player when click on delete img', () => {
    const { debugElement } = fixture;
    const deleteImg = debugElement.query(
      By.css('[data-testid="delete-img"]')
    );
    deleteImg.triggerEventHandler('click', null);

    expect(playerService.deletePlayer).toHaveBeenCalled();
    expect(component.playerDeleted.emit).toHaveBeenCalled();
  });

  it('edit player when click on edit img', () => {
    const { debugElement } = fixture;
    const editImg = debugElement.query(
      By.css('[data-testid="edit-img"]')
    );
    editImg.triggerEventHandler('click', null);

    fixture.detectChanges();
    const playerCmp = debugElement.query(
      By.css('[data-testid="player-cmp"]')
    );

    expect(playerCmp).not.toBeNull();

  });

  it('close modal', () => {
    const { debugElement } = fixture;
    const editImg = debugElement.query(
      By.css('[data-testid="edit-img"]')
    );
    editImg.triggerEventHandler('click', null);
    fixture.detectChanges();
    component.closeModal();
    fixture.detectChanges();
    const playerCmp = debugElement.query(
      By.css('[data-testid="player-cmp"]')
    );

    expect(playerCmp).toBeNull();

  });

});
