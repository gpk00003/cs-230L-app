import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourAcrossGridComponent } from './four-across-grid.component';

describe('FourAcrossGridComponent', () => {
  let component: FourAcrossGridComponent;
  let fixture: ComponentFixture<FourAcrossGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourAcrossGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourAcrossGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
