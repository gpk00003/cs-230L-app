import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtyMinuteMealsComponent } from './thirty-minute-meals.component';

describe('ThirtyMinuteMealsComponent', () => {
  let component: ThirtyMinuteMealsComponent;
  let fixture: ComponentFixture<ThirtyMinuteMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirtyMinuteMealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirtyMinuteMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
