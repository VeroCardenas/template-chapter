import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

@Component({
  template: `
    <img appImgBroken class="card-player" [src]="''" alt="MDN">
  `
})
class HostComponent {}

describe('ImgBrokenDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let nativeEl!: HTMLInputElement;
  let inputEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgBrokenDirective, HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    inputEl = fixture.debugElement.query(By.css('img'));
    nativeEl = inputEl.nativeElement;
  });

  it('should update the img element src attribute for an invalid image', () => {
    // const spyError = jest.spyOn(nativeEl, 'error' ).mockImplementation(() => {throw new Error()});
    fixture.detectChanges();
    nativeEl.dispatchEvent(new Event('error'));
    // expect(spyError).toHaveBeenCalled();
    expect(nativeEl.src).toBe('https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png');
});
});


  /* it('should create an instance', () => {
    const directive = new ImgBrokenDirective();
    expect(directive).toBeTruthy();
  }); */



