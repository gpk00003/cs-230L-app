import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupStewChiliComponent } from './soup-stew-chili.component';

describe('SoupStewChiliComponent', () => {
  let component: SoupStewChiliComponent;
  let fixture: ComponentFixture<SoupStewChiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoupStewChiliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoupStewChiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
