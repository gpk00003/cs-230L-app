import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickneasyComponent } from './quickneasy.component';

describe('QuickneasyComponent', () => {
  let component: QuickneasyComponent;
  let fixture: ComponentFixture<QuickneasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickneasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickneasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
