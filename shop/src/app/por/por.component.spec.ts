import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorComponent } from './por.component';

describe('PorComponent', () => {
  let component: PorComponent;
  let fixture: ComponentFixture<PorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
