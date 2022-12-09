import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emit event when click in close', () => {
    jest.spyOn(component.close, 'emit');

    component.show = true;
    fixture.detectChanges();

    const { debugElement } = fixture;
    const closeImg = debugElement.query(
      By.css('[data-testid="close-img"]')
    );
    closeImg.triggerEventHandler('click', null);

    expect(component.close.emit).toHaveBeenCalled();
  });

});
