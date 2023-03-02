import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePotMealComponent } from './one-pot-meal.component';

describe('OnePotMealComponent', () => {
  let component: OnePotMealComponent;
  let fixture: ComponentFixture<OnePotMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePotMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePotMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
