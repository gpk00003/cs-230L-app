import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveIngredientDinnersComponent } from './five-ingredient-dinners.component';

describe('FiveIngredientDinnersComponent', () => {
  let component: FiveIngredientDinnersComponent;
  let fixture: ComponentFixture<FiveIngredientDinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveIngredientDinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveIngredientDinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
