import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourAcrossCardComponent } from './four-across-card.component';

describe('FourAcrossCardComponent', () => {
  let component: FourAcrossCardComponent;
  let fixture: ComponentFixture<FourAcrossCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourAcrossCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourAcrossCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
