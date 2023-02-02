import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLeftFourRightComponent } from './big-left-four-right.component';

describe('BigLeftFourRightComponent', () => {
  let component: BigLeftFourRightComponent;
  let fixture: ComponentFixture<BigLeftFourRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigLeftFourRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigLeftFourRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
