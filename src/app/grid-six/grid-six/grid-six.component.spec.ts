import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSixComponent } from './grid-six.component';

describe('GridSixComponent', () => {
  let component: GridSixComponent;
  let fixture: ComponentFixture<GridSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
